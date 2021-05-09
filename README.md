# caesar-cipher-cli-tool

## Run app

1. Clone  app

  git clone https://github.com/asigithub/caesar-cipher-cli-tool

2. Switch to app directory

3. Switch to dev breanch
  
  git switch dev

4. Install dependencies

  npm install

5. Run script

  node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
  
  node my_caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt
  
  node my_caesar_cli --action decode --shift 7 --input decoded.txt --output plain.txt

  Possible arguments:
  -s, --shift: a shift
  -i, --input: an input file
  -o, --output: an output file
  -a, --action: an action encode/decode
