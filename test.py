import unittest

from whiteboard import solution

class MatchTestCase(unittest.TestCase):
    def test_example_one(self):
        self.assertEqual(solution("zzzab"),"cz")
    def test_empty(self):
        self.assertEqual(solution(""),"")
    def test_a(self):
        self.assertEqual(solution("abaa"),"ac")
    def test_long(self):
        self.assertEqual(solution("xsdlafqpcmjytoikojsecamgdkehrqqgfknlhoudqygkbxftivfbpxhxtqgpkvsrfflpgrlhkbfnyftwkdebwfidmpauoteahyh"),'acdeghlmnqrvyz')

if __name__ == '__main__':
    unittest.main()