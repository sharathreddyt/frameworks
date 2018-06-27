package com.example.sharatht.udemysection2;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void clickFunction(View view) {

        EditText nameEditText = (EditText) findViewById(R.id.nameEditText);
        EditText passwordEditText = (EditText) findViewById(R.id.password_editText);
        Log.i("info","button clicked by " + view) ;
        Log.i("Values","entered name is " + nameEditText.getText().toString());
        Log.i("Values","entered password is " + passwordEditText.getText().toString());


        Toast.makeText(this, nameEditText.getText().toString() + " you've successfully logged in", Toast.LENGTH_SHORT).show();
    }
}
