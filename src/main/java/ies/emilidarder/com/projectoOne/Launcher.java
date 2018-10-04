package ies.emilidarder.com.projectoOne;

import ies.emilidarder.com.projectoOne.data.Moto;

/* Prueba de commentarios */
public class Launcher {
    public static void main(String... args) {
        System.out.println("Concesionario BrumBrum App 2.0");
        Moto moto = new Moto();
        moto.start();
        System.out.println("pista que voy");
        moto.breake();

    }
}
