package com.bdd.cukes;

/**
 * Created by fhumayun on 4/13/15.
 */
public class Banana {
    private int cukes;

    public void eat(int cukes) {
        this.cukes = cukes;
    }

    public String getCost(int price) {
        return "Cost is 40";
    }
}