//we need some head files. include goverment and another company and other people .
#include <iostream>
#include <fstream>
#include "../head_file/rapidjson/document.h"
#include "../head_file/rapidjson/writer.h"
#include "../head_file/rapidjson/stringbuffer.h"

using namespace std;
using namespace rapidjson;


void print01();

int main(){
    cout<<"get some data from json file."<<endl;
    print01();
    return 0;
}

void print01(){
    cout<<"slk"<<endl;
}
string readFile(){
    ifstream file;
    file.open("../data/bicolor/s1.json",ios_base::in);
    if(!file.is_open()){
	cout<<"open failure"<<endl;
    }
    /*
    stringstream ss;
    ss<<file.rdbuf();
    string str = ss.str();
    cout<<str<<endl;
    */
    string str;
    return str;
}

/***read from file , storage in [code,blue] ,
 *
 *
 *
 *
 */



