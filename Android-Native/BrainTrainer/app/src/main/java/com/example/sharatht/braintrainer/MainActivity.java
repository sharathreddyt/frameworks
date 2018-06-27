package com.example.sharatht.braintrainer;

import android.os.CountDownTimer;
import android.support.constraint.ConstraintLayout;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import java.util.ArrayList;
import java.util.Random;

public class MainActivity extends AppCompatActivity {

    Button goButton;
    TextView sumTextView, resultTextView, scoreTextView, timerTextView;
    Button button0, button1, button2, button3, playAgain;
    ConstraintLayout gameLayout;
    int locationOfCorrectAnswer;
    ArrayList<Integer> answers = new ArrayList<Integer>();
    int score = 0, numberOfQuestions = 0;

    public void start(View view) {
        goButton.setVisibility(View.INVISIBLE);
        gameLayout.setVisibility(View.VISIBLE);
        playAgain(findViewById(R.id.playAgainButton));
    }

    public void chooseAnswer(View view) {
        numberOfQuestions++;
        if (Integer.toString(locationOfCorrectAnswer).equals(view.getTag().toString())) {
            score++;
            resultTextView.setText("Correct!");
        } else {
            resultTextView.setText("wrong:(");
        }

        scoreTextView.setText(Integer.toString(score) + "/" + Integer.toString(numberOfQuestions));

        newQuestion();

    }

    public void playAgain(View view) {

        score = 0;
        numberOfQuestions = 0;
        newQuestion();
        scoreTextView.setText(Integer.toString(score) + "/" + Integer.toString(numberOfQuestions));
        timerTextView.setText("30s");

        new CountDownTimer(30000, 1000) {
            @Override
            public void onTick(long millisUntilFinished) {
                timerTextView.setText(String.valueOf(millisUntilFinished / 1000) + "s");

            }

            @Override
            public void onFinish() {

                resultTextView.setText("Done!");
                playAgain.setVisibility(View.VISIBLE);
            }
        }.start();
    }

    public void newQuestion() {

        playAgain.setVisibility(View.INVISIBLE);
        Random rand = new Random();

        int a = rand.nextInt(21);
        int b = rand.nextInt(21);
        sumTextView.setText(Integer.toString(a) + " + " + Integer.toString(b));

        locationOfCorrectAnswer = rand.nextInt(4);

        answers.clear();

        for (int i = 0; i < 4; i++) {
            if (i == locationOfCorrectAnswer) {
                answers.add(a + b);
            } else {

                int wrongAnswer = rand.nextInt(41);

                while (wrongAnswer == a + b) {
                    wrongAnswer = rand.nextInt(41);
                }
                answers.add(wrongAnswer);
            }

        }


        button0.setText(Integer.toString(answers.get(0)));
        button1.setText(Integer.toString(answers.get(1)));
        button2.setText(Integer.toString(answers.get(2)));
        button3.setText(Integer.toString(answers.get(3)));

    }


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        goButton = findViewById(R.id.start);
        sumTextView = findViewById(R.id.sumTextView);
        button0 = findViewById(R.id.button0);
        button1 = findViewById(R.id.button1);
        button2 = findViewById(R.id.button2);
        button3 = findViewById(R.id.button3);
        resultTextView = findViewById(R.id.resultTextView);
        scoreTextView = findViewById(R.id.scoreTextView);
        timerTextView = findViewById(R.id.timerTextView);
        playAgain = findViewById(R.id.playAgainButton);
        gameLayout = findViewById(R.id.gameLayout);

        goButton.setVisibility(View.VISIBLE);
        playAgain(findViewById(R.id.playAgainButton));
        gameLayout.setVisibility(View.INVISIBLE);
    }
}
