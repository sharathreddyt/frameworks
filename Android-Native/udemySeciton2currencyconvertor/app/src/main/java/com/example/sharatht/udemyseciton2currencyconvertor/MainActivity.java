package com.example.sharatht.udemyseciton2currencyconvertor;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Spinner;

import com.loopj.android.http.AsyncHttpClient;
import com.loopj.android.http.JsonHttpResponseHandler;

import org.json.JSONException;

import java.util.ArrayList;
import java.util.List;


public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public  void initiateSpinner(View view , String[] items){
        Spinner dropdown =  (Spinner) view;

        ArrayAdapter<String> adapter = new ArrayAdapter<>(this, android.R.layout.simple_spinner_dropdown_item, items);
        dropdown.setAdapter(adapter);
    }

    AsyncHttpClient client = new AsyncHttpClient();

    Spinner spinnerTop , spinnerBottom;

public void getInfo(View view) throws JSONException {

//addItemsOnSpinner();
    client.get("https://forex.1forge.com/1.0.3/convert?from=USD&to=EUR&quantity=100&api_key=sSCVTg3Oulw6FnGOI7y3tSXcterEjUGR", JsonHttpResponseHandler res );

   Log.i("data",new RestCalls().getData().toString());

}

    private void addItemsOnSpinner() {

        spinnerTop = (Spinner) findViewById(R.id.topSpinner);

        List<String> list = new ArrayList<String>();



    }




}
