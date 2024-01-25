// so here i am designing a dice roller using c++ language

#include <iostream>
#include <cstdlib> // for rand() and srand()
#include <ctime>   // for time()

using namespace std;

int main() {
    // Initialize random seed
    srand(static_cast<unsigned int>(time(0)));

    // Roll the first die
    int die1 = (rand() % 6) + 1;

    // Roll the second die
    int die2 = (rand() % 6) + 1;

    // Display the results
    cout << "The first die rolled: " << die1 << endl;
    cout << "The second die rolled: " << die2 << endl;
    cout << "The total is: " << die1 + die2 << endl;

    return 0;
}
