package com.example.sharatht.listviewdemo;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
//
//
//        ListView myListView = findViewById(R.id.myListView);
//       final ArrayList<String> names = new ArrayList<String>();
//
//        names.add("nick");
//        names.add("sarah");
//        names.add("shane");
//        names.add("shine");
//
//
//        ArrayAdapter<String> arrayAdapter = new ArrayAdapter<String>(this,android.R.layout.simple_list_item_1,names);
//
//        myListView.setAdapter(arrayAdapter);
//        myListView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
//            @Override
//            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
////                parent is entire list view
////                view is each item in the list
////                position is array index of each item in the list
////                id do not know yet to be discovered
//
//                Log.i("person selected","" +names.get(position));
//
//            }
//        });




        ListView firstListView = findViewById(R.id.firstListView);

       final ArrayList<String> friends = new ArrayList<String>();

        friends.add("everyone");
        friends.add("someone");
        friends.add("somebody");
        friends.add("everybody");

ArrayAdapter<String> arrayAdapter = new ArrayAdapter<String>(this,android.R.layout.simple_list_item_1,friends);

firstListView.setAdapter(arrayAdapter);

firstListView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
    @Override
    public void onItemClick(AdapterView<?> parent, View view, int position, long id) {

    }
});

    }
}
