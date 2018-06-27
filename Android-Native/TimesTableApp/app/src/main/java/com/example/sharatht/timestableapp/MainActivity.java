package com.example.sharatht.timestableapp;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.SeekBar;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {
     ListView timesTablesListView;
    public void generateTimesTable(int timesTableNumber) {


        ArrayList<Integer> timesTableContent = new ArrayList<Integer>();

        for(int i=1;i<=100;i++){
            timesTableContent.add(timesTableNumber * i);
        }

        ArrayAdapter<Integer> arrayAdapter = new ArrayAdapter<Integer>(this,android.R.layout.simple_list_item_1,timesTableContent);

        timesTablesListView.setAdapter(arrayAdapter);



    }


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);


        final SeekBar timesTablesSeekbar = findViewById(R.id.timesTableSeekBar);
        timesTablesListView = findViewById(R.id.timesTablesListView);
int max=20;
int startingPosition =10;
        timesTablesSeekbar.setMax(max);
        timesTablesSeekbar.setProgress(startingPosition);
generateTimesTable(startingPosition);
        timesTablesSeekbar.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
            @Override
            public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {
                int min = 1;
                int timesTableNumber;
                if(progress < min){
                    timesTableNumber = min;
                    timesTablesSeekbar.setProgress(min);
                }
                else{
                    timesTableNumber = progress;
                }

generateTimesTable(timesTableNumber);

            }

            @Override
            public void onStartTrackingTouch(SeekBar seekBar) {

            }

            @Override
            public void onStopTrackingTouch(SeekBar seekBar) {

            }
        });


    }
}
