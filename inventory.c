#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX 100

struct Product {
    int id;
    char name[50];
    float price;
    int quantity;
};

struct Product inventory[MAX];
int count = 0;

void addProduct(int id, char name[], float price, int qty) {
    inventory[count].id = id;
    strcpy(inventory[count].name, name);
    inventory[count].price = price;
    inventory[count].quantity = qty;
    count++;
}

void showProducts() {
    for(int i=0;i<count;i++) {
        printf("%d %s %.2f %d\n",
        inventory[i].id,
        inventory[i].name,
        inventory[i].price,
        inventory[i].quantity);
    }
}

float totalValue() {
    float sum = 0;
    for(int i=0;i<count;i++)
        sum += inventory[i].price * inventory[i].quantity;
    return sum;
}