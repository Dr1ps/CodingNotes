//Stdio = standard input output library
#include <stdio.h>

//Global variable, can be seen anywhere
int globalVariable;

int main(void) {
    //Integer variable, declaration
    int x;
    //Initialization
    x = 30;
    printf("%d\n",x);
    //Declaration and initialization can be merged (string deosnt exist in C)
    char y[8] = "Gabriele";
    printf("%s\n",y);
}