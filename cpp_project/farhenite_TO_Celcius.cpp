// so Here i am writing a program to convert temperature from celsius to fahrenheit or viceversa
#include <iostream>
using namespace std;

// Function to convert temperature from Fahrenheit to Celsius
float fahrenheitToCelsius(float fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Function to convert temperature from Celsius to Fahrenheit
float celsiusToFahrenheit(float celsius) {
    return (celsius * 9 / 5) + 32;
}

int main() {
    char choice;
    float temperature;

    cout << "Enter 'F' to convert from Fahrenheit to Celsius, or 'C' to convert from Celsius to Fahrenheit: ";
    cin >> choice;

    if (choice == 'F' || choice == 'f') {
        cout << "Enter temperature in Fahrenheit: ";
        cin >> temperature;
        cout << "Temperature in Celsius: " << fahrenheitToCelsius(temperature) << endl;
    } 
    else if (choice == 'C' || choice == 'c') {
        cout << "Enter temperature in Celsius: ";
        cin >> temperature;
        cout << "Temperature in Fahrenheit: " << celsiusToFahrenheit(temperature) << endl;
    } 
    else {
        cout << "Invalid choice! Please enter 'F' or 'C'." << endl;
    }

    return 0;
}
