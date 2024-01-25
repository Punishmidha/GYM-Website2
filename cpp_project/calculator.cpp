// So this is my task1 ..here i am making calculator using c++ language
// So Let's start

#include <iostream>
using namespace std;

int main() {
    char op;
    float num1, num2;
    bool continueCalculation = true;

    while (continueCalculation) {
        cout << "Enter operator (+, -, *, /) or 'q' to quit: ";
        cin >> op;

        if (op == 'q' || op == 'Q') {
            continueCalculation = false;
            continue;
        }

        cout << "You Have To Enter two operands: " << endl;;
        cout << "Enter 1st number:" << endl;
        cin >> num1;
        cout << "Enter 2nd number: " << endl;
        cin >> num2;

        switch(op) {
            case '+':
                cout << "Sum of these numbers is = " << num1 + num2 << endl;
                break;
            case '-':
                cout << "Difference of these numbers is = " << num1 - num2 << endl;
                break;
            case '*':
                cout << "Product of these numbers is = " << num1 * num2 << endl;
                break;
            case '/':
                if(num2 != 0)
                    cout << "Quotient of these numbers is = " << num1 / num2 << endl;
                else
                    cout << "Error! Division by zero." << endl;
                break;
            default:
                cout << "Error! Invalid operator" << endl;
                break;
        }
    }

    cout << "Calculator program has ended. Goodbye!" << endl;

    return 0;
}
