package com.example.sharatht.eggtimer;

import android.media.MediaPlayer;
import android.os.CountDownTimer;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.SeekBar;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    SeekBar timerSeekBar;
    TextView timerTextView;
    MediaPlayer mPlayer;
    Button goButton;
    CountDownTimer countDownTimer;
    boolean enableSeekbar = true;
public void resetTimer() {
    enableSeekbar = true;
    goButton.setText("Go!!");
    timerSeekBar.setEnabled(enableSeekbar);
    countDownTimer.cancel();
    timerTextView.setText("00:30");
    timerSeekBar.setProgress(30);

}
    public void goButton(View view){
if(enableSeekbar){
    timer(timerSeekBar.getProgress()*1000,1000);
    enableSeekbar = false;
goButton.setText("stop!!");
    timerSeekBar.setEnabled(enableSeekbar);


}else {
    resetTimer();
}


    }


    public void timer( int totalTime, int interval){
        countDownTimer =  new CountDownTimer(totalTime,interval){
            public void onTick(long millisUntilFinished){

               updateTimer((int)millisUntilFinished/1000);


            }
            public void onFinish(){

              mPlayer = MediaPlayer.create(getApplicationContext(),R.raw.airhorn);
                mPlayer.start();
                resetTimer();

            }


        }.start();
    }


    public void updateTimer(int secondsLeft){
        int minutes = secondsLeft / 60;
        int seconds = secondsLeft % 60;
        String secondString = "";
        String minuteString = "";
        if(seconds <10) secondString="0";
        if(minutes<10)minuteString="0";

        timerTextView.setText(minuteString+ Integer.toString(minutes) + ":" + secondString + Integer.toString(seconds));

    }


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
 timerSeekBar = findViewById(R.id.timerSeekBar);

      timerTextView = findViewById(R.id.countDownTextView);
goButton = findViewById(R.id.goButton);
        timerSeekBar.setMax(600);
        timerSeekBar.setProgress(30);

        timerSeekBar.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
            @Override
            public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {
                updateTimer(progress);
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
