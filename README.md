# ciphering-CLI-tool

## About

CLI tool that will encode and decode a text by 3 substitution ciphers:
- Caesar cipher
- Atbash cipher
- ROT-8 as variation of ROT-13

## Install

Open command line in the folder where you want to clone this program. Clone repository using command below.
```bash
git clone https://github.com/katya-petrova/ciphering-CLI-tool.git
git checkout dev
```

Install dependencies
```bash
 npm i
```

## How it works

The CLI tool is accepted 4 options (short alias and full name):

1.  **-c, --config**: config for ciphers
Config is a string with pattern `{XY(-)}n`, where:
  * `X` is a cipher mark:
    * `C` is for Caesar cipher (with shift 1)
    * `A` is for Atbash cipher
    * `R` is for ROT-8 cipher
  * `Y` is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)
    * `1` is for encoding
    * `0` is for decoding
    * **required**
2.  **-i, --input**: a path to input file
3.  **-o, --output**: a path to output file
     **required**

## Usage example:

```bash
$ node bin/index.js -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!`

```bash
$ node bin/index.js -c "C1-C0-A-R1-R0-A-R0-R0-C1-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!`

```bash
$ node bin/index.js -c "A-A-A-R1-R0-R0-R0-C1-C1-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!`
```