import unittest
from py_game.src.py_game import get_game_result

class TestGame(unittest.TestCase):
    def test_get_game_result(self):
        # Test scenarios where user chooses 'rock'
        self.assertEqual(get_game_result('rock', 'scissors'), "You win!")
        self.assertEqual(get_game_result('rock', 'rock'), "It's a tie!")
        self.assertEqual(get_game_result('rock', 'paper'), "Computer wins!")

        # Test scenarios where user chooses 'paper'
        self.assertEqual(get_game_result('paper', 'rock'), "You win!")
        self.assertEqual(get_game_result('paper', 'paper'), "It's a tie!")
        self.assertEqual(get_game_result('paper', 'scissors'), "Computer wins!")

        # Test scenarios where user chooses 'scissors'
        self.assertEqual(get_game_result('scissors', 'paper'), "You win!")
        self.assertEqual(get_game_result('scissors', 'scissors'), "It's a tie!")
        self.assertEqual(get_game_result('scissors', 'rock'), "Computer wins!")

if __name__ == '__main__':
    unittest.main()