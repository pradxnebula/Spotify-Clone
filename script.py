song_data = {
    1: {
        'name': 'Song 1',
        'description': 'Description for Song 1',
        'thumbnail': 'thumbnail.jpg'
    },
    2: {
        'name': 'Song 2',
        'description': 'Description for Song 2',
        'thumbnail': 'thumbnail.jpg'
    },
    # Add more songs as needed
}

html_code = "<div class='card-bg'>"

for song_id, song_info in song_data.items():
    html_code += f"""
        <div class='card'>
            <div><img id='card-thumbnail-{song_id}' src='{song_info['thumbnail']}' alt='{song_info['thumbnail']}'></div>
            <div id='card-content-{song_id}'>
                <div id='card-title-{song_id}'>{song_info['name']}</div>
                <div id='card-subtext-{song_id}'>{song_info['description']}</div>
            </div>
        </div>
    """

html_code += "</div>"

css_code = """
<style>
    .card-bg {
        display: flex;
        flex-wrap: wrap;
    }
    
    .card {
        margin: 10px;
        padding: 10px;
        border: 1px solid #ccc;
    }

    img {
        max-width: 100%;
        height: auto;
    }
</style>
"""

# Save the generated HTML and CSS to files or use them in your web application.
with open('music_player.html', 'w') as html_file:
    html_file.write(html_code)

with open('music_player.css', 'w') as css_file:
    css_file.write(css_code)



# <div class="card-bg">
# <div><img id="card-thumbnail" src='{song_info['thumbnail']}' alt='{song_info['thumbnail']}'></div>
# <div id="card-content">
# <div id="card-title">{song_info['name']}</div>
# <div id="card-subtext">{song_info['description']}</div>
# </div>
# </div>

# this is my song card component html code. i want thumbnail in id "card-thumbnail", song name in id "card-title" and description in id "card-subtext". modify the python code according to my html code without modifying or interfering with id and class in html code.