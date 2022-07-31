# Swap

A simple swap in for solana.

This repo is the solana program repo.

Setup and Client is located here: https://github.com/adamdelsol/longboard

### Program Steps

- client initiates swap by sending token b to program
- create program's account for token b (client or program?)
- program calculates amount of token a to send in return (1 for 1, for now)
- program creates account for token a for client
- transfer authority for account to client

### Bootstrap phase:

- create admin wallet (longboard)
- create swap program account (swap)
- mint token a with admin (longboard)
- mint token b with admin (longboard)
- create alice wallet (longboard)
- send token b to alice wallet (longboard)

### Deploy phase

- deploy and get swap idl and address (swap)
- send token a to program account (longboard)

### Interact phase

- swap from longboard client
