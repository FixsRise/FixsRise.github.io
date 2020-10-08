// ConsoleApplication4.cpp : Этот файл содержит функцию "main". Здесь начинается и заканчивается выполнение программы.
//

#include <iostream>
using namespace std;

int main()
{
    

    setlocale(LC_ALL, "Russian");

    float a, b;

    cout << "\tПеревод числа из метров в километры" << endl << endl;

    cout << "Введите количество метров: ";
    
    cin >> a;

    b = a / 1000;

    cout << a << "м" << " = " << b << "км" << endl << endl;





    system("pause");
}
