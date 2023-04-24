import json

with open("packs/jutsu.db", "r") as f:
    data = f.read()

# split the data into separate JSON objects
json_objects = data.strip().split("\n")

# process each JSON object
for json_obj in json_objects:
    jutsu = json.loads(json_obj)
    # read the title and decide based on the letter inside the [Letter], and print it
    title = jutsu["name"]
    if title == "#[CF_tempEntity]":
        continue
    letter = title[title.index("[")+1:title.index("]")]
    jutsu_rank = None
    if letter == "A":
        jutsu_rank = "A Rank"
    elif letter == "S":
        jutsu_rank = "S Rank"
    elif letter == "C":
        jutsu_rank = "C Rank"
    elif letter == "D":
        jutsu_rank = "D Rank"
    elif letter == "B":
        jutsu_rank = "B Rank"
    elif letter == "E":
        jutsu_rank = "E Rank"

    description = jutsu['system']['description']['value']
    keywords_start_index = description.find("<p>Keywords:") + len("<p>Keywords:")
    keywords_end_index = description.find("</p>", keywords_start_index)
    keywords = description[keywords_start_index:keywords_end_index].strip().split(", ")
    # print(keywords)

    # determine the spell school based on the keywords
    spell_school = None
    if "Hijutsu" in keywords:
        spell_school = "Hijutsu"
    elif "Bukijutsu" in keywords:
        spell_school = "Bukijutsu"
    elif "Water" in title:
        spell_school = "Ninjutsu"
    else:
        for keyword in keywords:
            if keyword in ["Ninjutsu", "Taijutsu", "Genjutsu"]:
                spell_school = keyword
                break

    # print("Spell school:", spell_school)
    #print("{title} - ({jutsu_rank}) - {spell_school}".format(title=title, jutsu_rank=jutsu_rank, spell_school=spell_school))
    if spell_school is None:
        print("{} - ({}) - No Spell School".format(title, jutsu_rank))

