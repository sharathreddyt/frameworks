package com.example.sharatht.guessthecelebrity;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.AsyncTask;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.Toast;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Random;
import java.util.concurrent.ExecutionException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class MainActivity extends AppCompatActivity {

    ArrayList<String> celebUrls = new ArrayList<String>();
    ArrayList<String> celebNames = new ArrayList<String>();
    Button button0, button1, button3, button2;
    int chosenCeleb = 0;
    ImageView imageView;
    String[] answers = new String[4];
    int locationOfCorrectAnswer = 0;

    public void guessTheCelebrity(View view) {
        Log.i("tag", view.getTag().toString());
        if (view.getTag().toString().equals(Integer.toString(locationOfCorrectAnswer))) {
            Toast.makeText(getApplicationContext(), "correct!!", Toast.LENGTH_SHORT).show();
        } else {
            Toast.makeText(getApplicationContext(), "Wrong it is " + celebNames.get(chosenCeleb), Toast.LENGTH_SHORT).show();
        }

        newQuestion();
    }

    public class ImageDownloader extends AsyncTask<String, Void, Bitmap> {
        URL url;
        HttpURLConnection urlConnection = null;

        @Override
        protected Bitmap doInBackground(String... urls) {
            try {
                url = new URL(urls[0]);
                urlConnection = (HttpURLConnection) url.openConnection();
                InputStream in = urlConnection.getInputStream();

                Bitmap bitmap = BitmapFactory.decodeStream(in);
                return bitmap;
            } catch (MalformedURLException e) {
                e.printStackTrace();
                return null;
            } catch (IOException e) {
                e.printStackTrace();
                return null;

            }

        }
    }


    public class DownloadTask extends AsyncTask<String, Void, String> {

        @Override
        protected String doInBackground(String... urls) {
            String result = "";
            URL url;
            HttpURLConnection urlConnection = null;

            try {
                url = new URL(urls[0]);
                urlConnection = (HttpURLConnection) url.openConnection();
                InputStream in = urlConnection.getInputStream();
                InputStreamReader reader = new InputStreamReader(in);
                int data = reader.read();

                while (data != -1) {
                    char current = (char) data;
                    result += current;
                    data = reader.read();
                }

                return result;
            } catch (Exception e) {
                e.printStackTrace();
                return null;
            }
        }
    }


    public void newQuestion() {
        Random random = new Random();
        chosenCeleb = random.nextInt(celebUrls.size());

        ImageDownloader imageTask = new ImageDownloader();

        Bitmap celebImage = null;
        try {
            celebImage = imageTask.execute(celebUrls.get(chosenCeleb)).get();
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            e.printStackTrace();
        }
        imageView.setImageBitmap(celebImage);
        locationOfCorrectAnswer = random.nextInt(4);

        int incorrectAnswerLocation;

        for (int i = 0; i < 4; i++) {

            if (i == locationOfCorrectAnswer) {
                answers[i] = celebNames.get(chosenCeleb);
            } else {
                incorrectAnswerLocation = random.nextInt(celebUrls.size());
                while (incorrectAnswerLocation == chosenCeleb) {
                    incorrectAnswerLocation = random.nextInt(celebUrls.size());
                }
                answers[i] = celebNames.get(incorrectAnswerLocation);
            }


        }


        button0.setText(answers[0]);

        button1.setText(answers[1]);

        button2.setText(answers[2]);

        button3.setText(answers[3]);
    }


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        DownloadTask task = new DownloadTask();

        String result = null;
        imageView = findViewById(R.id.imageView);
        button0 = findViewById(R.id.button0);
        button1 = findViewById(R.id.button1);
        button2 = findViewById(R.id.button2);
        button3 = findViewById(R.id.button3);

        try {
            result = task.execute("http://www.posh24.se/kandisar").get();

            String[] splitResult = result.split("<div class=\"col-xs-12 col-sm-6 col-md-4\">");

            Pattern p = Pattern.compile("img src=\"(.*?)\"");
            Matcher m = p.matcher(splitResult[0]);

            while (m.find()) {

                celebUrls.add(m.group(1));
            }
            Pattern pa = Pattern.compile("alt=\"(.*?)\"");
            Matcher ma = pa.matcher(splitResult[0]);

            while (ma.find()) {

                celebNames.add(ma.group(1));

            }

            newQuestion();

        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            e.printStackTrace();
        }

    }
}
