package com.example.sharatht.udemyseciton2currencyconvertor;

import android.util.Log;

import com.loopj.android.http.JsonHttpResponseHandler;

import org.json.JSONObject;

import cz.msebera.android.httpclient.Header;

/**
 * Created by sharatht on 6/5/18.
 */

public class RestCalls extends JsonHttpResponseHandler {
    JSONObject data;
    @Override
    public void onStart() {
        // called before request is started
    }

    @Override
    public void onSuccess(int statusCode, Header[] headers, JSONObject responseBody) {
        // called when response HTTP status is "200 OK"
        data = responseBody;
        Log.i("data", "" + responseBody);
    }
    public JSONObject getData() {
        return  data;
    }

    @Override
    public void onRetry(int retryNo) {
        // called when request is retried
    }



}
