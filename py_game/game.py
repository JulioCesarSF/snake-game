# create a simple rock, paper, scissors game
# provide a welcome message
# get the user's choice
# get the computer's choice
# compare the two choices
# print the results
# ask the user if they want to play again
# say goodbye and end the game 
# use one function for the game logic

import random

def get_computer_choice():
    return random.choice(['rock', 'paper', 'scissors'])

def get_game_result(user_choice, computer_choice):
    if user_choice == computer_choice:
        return "It's a tie!"
    elif user_choice == 'rock' and computer_choice == 'scissors':
        return "You win!"
    elif user_choice == 'paper' and computer_choice == 'rock':
        return "You win!"
    elif user_choice == 'scissors' and computer_choice == 'paper':
        return "You win!"
    else:
        return "Computer wins!"
    
def play_game():
    print("Welcome to Rock, Paper, Scissors!")
    user_choice = input("Enter rock, paper, or scissors: ")
    computer_choice = get_computer_choice()
    print(f"Computer chose {computer_choice}")
    print(get_game_result(user_choice, computer_choice))
    play_again = input("Do you want to play again? (yes/no): ")
    if play_again == 'yes':
        play_game()
    else:
        print("Goodbye!")

play_game()