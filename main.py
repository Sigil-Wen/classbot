import pyautogui 
import time
currentMouseX, currentMouseY = pyautogui.position() 
print(currentMouseX)
print(currentMouseY)
pyautogui.FAILSAFE = False





def openChrome(link):
    screenWidth, screenHeight = pyautogui.size() 
    pyautogui.moveTo(0, screenHeight-1)
    pyautogui.click()
    pyautogui.write('Chrome', interval=0.1)
    pyautogui.press('enter', interval = 1)
    pyautogui.write(link + '', interval=0.02)
    pyautogui.press('enter')
    time.sleep(5)
    pyautogui.moveTo(1269, 582)
    pyautogui.click()

link = 'https://meet.google.com/dez-ofhx-ftg?authuser=1'
openChrome(link)

