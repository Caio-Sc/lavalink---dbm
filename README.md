## Detailed Explanation of Lavalink Integration with Discord Bot Maker (DBM)

### Introduction
The integration of Lavalink with DBM allows for seamless audio playback functionalities within your Discord bot. This readme provides detailed instructions on how to set up and customize the integration to suit your needs.

### Prerequisites
1. Ensure you have the Magmastream player installed.
2. Familiarity with Discord Bot Maker (DBM) and JavaScript.

### Overview of Files
- **musica_connect.js**: Responsible for connecting to the Lavalink server and defining actions for various events like song start, queue end, and bot disconnect.
- **musica_play.js**: Handles the addition of music to the queue and formatting the message displayed when a song is added.

### Configuration

#### Editing musica_connect.js
1. **Connection Configuration**: Modify the code block indicated below to specify the connection details to your Lavalink server.

   ![image](https://github.com/Caio-Sc/lavalink---dbm/assets/53196995/38cd0eb3-46a7-43c6-b850-d920c52f16e1)

2. **Event Handling**: Customize the actions triggered when a song starts, the queue ends, or the bot disconnects. Adjust the code segment indicated below according to your requirements.

   ![image](https://github.com/Caio-Sc/lavalink---dbm/assets/53196995/6e6b4a0b-ecfc-45fc-9f06-0d5fc86f7942)

   You can also enable the `trackEnd` functionality by uncommenting the relevant section.

#### Editing musica_play.js
1. **Message Formatting**: Modify the code block indicated below to adjust how the message is displayed when a song is added to the queue. You may need to remove the hyperlink format if you're not using it within an embed.
2. 
   ![image](https://github.com/Caio-Sc/lavalink---dbm/assets/53196995/e690ac62-bebe-43a4-a1de-50b76cf2208e)

### Implementation

1. **Integration Setup**: Place all `.js` files into the actions folder of your DBM project. This should automatically create a "Music Control" section within DBM.
2. **Event Configuration**: Create an event in the event tab of DBM for one-time bot initialization. Utilize the `lavalink connect` action within this event to establish the connection with the Lavalink server.

### Conclusion

Following these steps, your Discord bot should be configured to seamlessly integrate with Lavalink for music playback. Ensure that the "magmastream" module is also installed to enable the necessary functionalities. Feel free to customize the integration further to suit your specific requirements. If done correctly, your bot should connect to the server and be ready to play music on your server.
