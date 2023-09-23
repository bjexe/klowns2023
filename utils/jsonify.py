import json
import csv

csvDictList = []

with open('Klowns 2023 FFL Draft - 2023 FFL Draft.csv') as csvfile:
    reader = csv.reader(csvfile, delimiter=',')
    count = 0
    # Player, Pos, Team, Rank, Bye Week
    for row in reader:
        if count > 0:
            if not row[3] or row[3] == ' ':
                rank = 0
            else:
                rank = int(row[3])
            playerDict = {
                "player" : row[0],
                "pos" : row[1],
                "team": row[2],
                "rank": rank,
                "bw" : row[4],
                "crossed": False,
                "picked" : False
            }
            csvDictList.append(playerDict)
        count += 1
    print(csvDictList)

    with open('klowns.json', 'w') as out:
        json.dump(csvDictList, out)

# turn csv into json file using relevant columns
# Columns to ignore:
# Sort Pos, comment, comment 2

# Important columns:
# Bye week, rank, team, pos, player