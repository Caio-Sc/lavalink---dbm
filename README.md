# Lavalink + DBM actions made by me

These are made to use with slash commands, but should work with messages. If you change the files to use message instead of interaction.

I'm sorry for this readme file.

## musica_connect

you will mostly change musica_connect and musica_play codes, the rest you can do within dbm. In musica_connect you will need to edit this part:

![image](https://github.com/Caio-Sc/lavalink---dbm/assets/53196995/38cd0eb3-46a7-43c6-b850-d920c52f16e1)

to connect to the lavalink server, and this part:

![image](https://github.com/Caio-Sc/lavalink---dbm/assets/53196995/6e6b4a0b-ecfc-45fc-9f06-0d5fc86f7942)

to change what happens when a song starts/queueEnds/bot is disconnected. For now, it is sending an embed when the song starts playing and disconnecting the bot when the queueEnd. You can also uncomment trackEnd part if you would like to use it.

## musica_play

in musica_play, you might want to edit this part:

![image](https://github.com/Caio-Sc/lavalink---dbm/assets/53196995/e690ac62-bebe-43a4-a1de-50b76cf2208e)

which you might want to use to send which music is added to the queue. Currently, it is the name of the song with hyperlink format to the song URL, but this won't work if you are not using it in an embed, so for normal messages you can just remove the "(link)" and the "\[]"

## Conclusion

These are made to use with slash commands. Just throw all .js files in the action's folder, and you should have a "Music Control" section in your dbm.
Create an event for one time bot initialization in the event tab and use the lavalink connect there
done. If you have a server, it should connect

You will also need to install the "magmastream" module
