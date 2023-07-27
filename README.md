# Lavalink + DBM actions made by me
These are made to use with slash commands, but should work with messages. If you change the files to use message instead of interaction
## musica_connect
you will mostly change musica_connect and musica_play codes, the rest you can do within dbm. In musica_connect you will need to edit this part:
![https://cdn.discordapp.com/attachments/1133458371501117671/1133459377618178108/image.png]
to connect to the lavalink server, and this part: 
![[Pasted image 20230726223355.png]]
to change what happens when a song starts/queueEnds/bot is disconnected. for now, it is sending an embed when the song starts playing and disconnecting the bot when the queueEnd.
![[Pasted image 20230726223443.png]]
you can also uncomment trackEnd part if you would like to use it.

## musica_play
in musica_play you might want to edit this part:
![[Pasted image 20230726223528.png]]
which you might want to use to send which music is added to the queue. right now, it is the name of the song with hyperlink format to the song URL, but this won't work if you are not using it in an embed, so for normal messages you can just remove the "(link)" and the "\[]" 
## Conclusion
these are made to use with slash commands. Just throw all .js files in the action's folder, and you should have a "Music Control" section in your dbm.
Create an event for one time bot initialization in the event tab and use the lavalink connect there
done, if you have a server, it should connect
Almost forgot, but you need to install "magmastream" module 
