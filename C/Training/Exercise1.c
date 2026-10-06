/*Leggere una sequenza di numeri interi, che deve terminare con 
0. Calcolare quanti numeri sono stati inseriti, quanti sono positivi e quanti negativi.
Svolgere anche la somma dei positivi. Il valore 0 non appartiene alla sequenza.*/

#include <stdio.h>

int main(void) {

    int a = 1;
    int cnt = 0;
    int neg = 0;
    int pos = 0;
    int sumPos = 0;

    while(a != 0) {
        printf("Input a number for the sequence, input '0' to end:\n");
        scanf("%d",&a);
        if(a == 0) break;
        if(a < 0) neg++;
        if(a > 0) {
            pos++;
            sumPos += a;
        }
        cnt++;
    }

    printf("Results:\n");
    printf("Numbers used: %d\n",cnt);
    printf("Positive numbers: %d\n", pos);
    printf("Negative numbers: %d\n", neg);
    printf("Sum of positive numbers: %d\n", sumPos);

    return 0;
}