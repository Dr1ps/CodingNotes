/*Fissare nel programma un numero intero, ad esempio 37.
Chiedere ripetutamente un tentativo all'utente. Stampare se il tentativo è troppo grande, troppo piccolo oppure corretto. 
Terminare quando il numero viene indovinato.*/

#include <stdio.h>
#define N 37

int main(void){
    int x;
    printf("Welcome, input a number to begin guessing!");
    do {
        scanf("%d",&x);
        if(x < N) {
            printf("The number you guessed is too low. Try again");
        }
        if(x > N) {
            printf("The number you guessed is too high. Try again");
        }
    } while (x != N);
    printf("You guessed the number! (%d)",N);
    return 0;
}