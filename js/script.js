var xhr = new XMLHttpRequest();
xhr.open('GET','js/data.json',true);
xhr.responseType = 'text';
xhr.onload = function()
{
	if(xhr.status === 200)
	{
		playerInfo = JSON.parse(xhr.responseText);
		 console.log(playerInfo); 
		 display(0);
	}
}
xhr.send();
function display(x)
{ 
   document.getElementById('playerImage').src = playerInfo[x].photo; 	
   document.getElementById('playerName').innerHTML = 'Name: ' + playerInfo[x].basics.name;
   document.getElementById('playerAge').innerHTML = 'Age: ' + playerInfo[x].basics.age;
   document.getElementById('playerNationality').innerHTML = 'Nationality: ' + playerInfo[x].basics.nationality; 
   document.getElementById('playerRole').innerHTML = 'Role: ' + playerInfo[x].basics.role;
   document.getElementById('playerTeams').innerHTML = 'Teams Played For: ' + playerInfo[x].basics.teams;
   document.getElementById('profileContent').innerHTML = playerInfo[x].description; 
   document.getElementById('playerGames').innerHTML = 'Games Played: ' + playerInfo[x].stats.games;
   document.getElementById('playerRuns').innerHTML = 'Runs: ' + playerInfo[x].stats.runs;
   document.getElementById('player100s').innerHTML = 'Centuries: ' + playerInfo[x].stats.centuries;
   document.getElementById('player50s').innerHTML = 'Half Centuries: ' + playerInfo[x].stats.halfcenturies;
   document.getElementById('playerHighscore').innerHTML = 'Highest Score: ' + playerInfo[x].stats.highscore;
   document.getElementById('playerAverage').innerHTML = 'Average: ' + playerInfo[x].stats.average;
}