package com.example.sharatht.udemysection2imagechallenge;

import android.graphics.BitmapFactory;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ImageView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void onButtonClick(View view){

        ImageView img=(ImageView)findViewById(R.id.randomImageView);


        String backgroundImageName = String.valueOf(img.getTag());

        Log.i("image name" , "" + backgroundImageName);
        if( backgroundImageName.equals(null) || backgroundImageName == "cat1")
        {
            img.setTag("cat2");
            img.setImageResource(R.drawable.cat2);

        }
        else{
            img.setTag("cat1");
            img.setImageResource(R.drawable.cat1);
        }



    }


}
