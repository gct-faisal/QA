package com.bdd.cukes;

/**
 * Created by fhumayun on 4/13/15.
 */
public class Belly {
    private int cukes;

    public void eat(int cukes) {
        this.cukes = cukes;
    }

    public String getSound(int waitingTime) {
        if (cukes > 40 && waitingTime >= 1) {
            return "growl";
        } else {
            return "silent";
        }
    }
}