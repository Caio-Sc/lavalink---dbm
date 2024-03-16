## Detailed Explanation of Lavalink Integration with Discord Bot Maker (DBM)

### Introduction
The integration of Lavalink with DBM allows for seamless audio playback functionalities within your Discord bot. This readme provides detailed instructions on how to set up and customize the integration to suit your needs.

### Prerequisites
1. Ensure you have the Magmastream player installed.
2. Familiarity with Discord Bot Maker (DBM) and JavaScript.

### Overview of Files

1. **musica_connect.js**: This file is responsible for connecting your bot to the Lavalink server. It defines actions for various events such as song start, queue end, and bot disconnect. You can customize these actions according to your requirements.

2. **musica_play.js**: In this file, you handle the addition of music to the queue and format the message displayed when a song is added. Customize the message format as needed, and ensure compatibility with your bot's design.

3. **pauseMusic.js**: Allows you to pause music playback. It's a simple action but crucial for user control over music playback.

4. **playMusic.js**: This file manages the addition of music to the queue. It provides options to specify the song URL or name and the channel where the music should be played.

5. **playerMusic.js**: Enables you to store information about the player, such as the current queue, in a variable. Useful for retrieving player information during runtime.

6. **resumeMusic.js**: Resumes music playback if it has been paused. Ensures smooth user experience by allowing users to resume playback at their convenience.

7. **skipMusic.js**: Allows users to skip the current song and proceed to the next one in the queue. Essential for managing the playlist and providing flexibility to users.

8. **stopMusic.js**: Stops music playback and clears the queue. Useful for ending music sessions or resetting the playlist.

This overview provides a brief description of each file's purpose and functionality within the Lavalink integration with Discord Bot Maker.

### Configuration

#### Editing musica_connect.js
1. **Connection Configuration**: Modify the code block indicated below to specify the connection details to your Lavalink server.

   
   ![image](https://github.com/Caio-Sc/lavalink---dbm/assets/53196995/38cd0eb3-46a7-43c6-b850-d920c52f16e1)
   

2. **Event Handling**: Customize the actions triggered when a song starts, the queue ends, or the bot disconnects. Adjust the code segment indicated below according to your requirements.

   
   ![image](https://github.com/Caio-Sc/lavalink---dbm/assets/53196995/6e6b4a0b-ecfc-45fc-9f06-0d5fc86f7942)
   

   You can also enable the `trackEnd` functionality by uncommenting the relevant section.

#### Editing musica_play.js
1. **Message Formatting**: Modify the code block indicated below to adjust how the message is displayed when a song is added to the queue. You may need to remove the hyperlink format if you're not using it within an embed.

   
   ![image](https://github.com/Caio-Sc/lavalink---dbm/assets/53196995/e690ac62-bebe-43a4-a1de-50b76cf2208e)
   

### Implementation

1. **Integration Setup**: Place all `.js` files into the actions folder of your DBM project. This should automatically create a "Music Control" section within DBM.
2. **Event Configuration**: Create an event in the event tab of DBM for one-time bot initialization. Utilize the `lavalink connect` action within this event to establish the connection with the Lavalink server.

### Conclusion

Following these steps, your Discord bot should be configured to seamlessly integrate with Lavalink for music playback. Ensure that the "magmastream" module is also installed to enable the necessary functionalities. Feel free to customize the integration further to suit your specific requirements. If done correctly, your bot should connect to the server and be ready to play music on your server.
