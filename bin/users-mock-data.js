const users= [
    
    {
        username: "Tizzy Bac",
        email: "tizzy@gmail.com",
        password:"$2b$10$aNbvo8UAvyX3LrY5HnEnt.7W6DP6/EotSHmTBiNytqbF3M3MMYdf6",
        profileURL:"https://img.ltn.com.tw/Upload/ent/page/800/2017/12/14/php75lQCa.jpg",
        description: "Virtute equidem ceteros in mel. Id volutpat neglegentur eos. Eu eum facilisis voluptatum, no eam albucius verterem. Sit congue platonem adolescens ut. Offendit reprimique et has, eu mei homero imperdiet.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",        
        location:"Taiwan",
        artistType:["Singer","Songwriter"],  //checkbox  https://soundbetter.com/s
        genre:"Pop-rock, rock",
        instrument:["Keyboard","Drum"],  //checkbox https://soundbetter.com/s
        spotifyLink:"https://open.spotify.com/artist/6Rv0ndBVPEQJ7KagPDtC5H?si=ES2qtinOTr2IPYiIyEt0VA",
        spotifyEmbed:'<iframe src="https://open.spotify.com/embed/artist/6Rv0ndBVPEQJ7KagPDtC5H" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
        projectsOwned: [],
        projectsJoined:[],
        likedUsers:[]  
    },
    {
        username: "David Bowie",
        email: "david@gmail.com",
        password:"$2b$10$uzQDBjuPQXI04xVUa5I6TOj6aGPAzaTZdxaKGuG.Ah6c2/5N0EP0e",
        profileURL:"https://media.spokesman.com/photos/2016/01/11/Obit_David_Bowie.JPG.jpg",
        description: "Virtute equidem ceteros in mel. Id volutpat neglegentur eos. Eu eum facilisis voluptatum, no eam albucius verterem. Sit congue platonem adolescens ut. Offendit reprimique et has, eu mei homero imperdiet.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",        
        artistType:["Singer","Songwriter"],  //checkbox  https://soundbetter.com/s
        location:"New York",
        genre:"Rock",
        instrument:["Guitar", "Drum"],  //checkbox https://soundbetter.com/s
        spotifyLink:"https://open.spotify.com/artist/0oSGxfWSnnOXhD2fKuz2Gy",
        spotifyEmbed:'<iframe src="https://open.spotify.com/embed/artist/0oSGxfWSnnOXhD2fKuz2Gy" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
        projectsOwned: [],
        projectsJoined:[],
        likedUsers:[]       
    },
    {
        username: "Julieta Venegas",
        email: "julieta@gmail.com",
        password:"$2b$10$sEu7uUoszE2pGSYPWVshfusHu80SPYPGAWl.EKfmyHM3mP2nN6xOm",
        profileURL:"https://laverdadnoticias.com/__export/1583771062444/sites/laverdad/img/2020/03/09/julieta_venegas_estrena_video_musical_mujeres_crop1583770723941.jpg_15941158.jpg",
        description: "Virtute equidem ceteros in mel. Id volutpat neglegentur eos. Eu eum facilisis voluptatum, no eam albucius verterem. Sit congue platonem adolescens ut. Offendit reprimique et has, eu mei homero imperdiet.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",        
        artistType:["Singer","Composer"],  //checkbox  https://soundbetter.com/s
        location:"California",
        genre:"Pop rock, indie pop, alternative music, folk rock",
        instrument:["Guitar", "Accordion"],  //checkbox https://soundbetter.com/s
        spotifyLink:"https://open.spotify.com/artist/2QWIScpFDNxmS6ZEMIUvgm?si=P_klEPanRIeVrN14uyi0aw",
        spotifyEmbed:'<iframe src="https://open.spotify.com/embed/artist/2QWIScpFDNxmS6ZEMIUvgm" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
        projectsOwned: [],
        projectsJoined:[],
        likedUsers:[]      
    },
    {
        username: "Soko",
        email: "soko@gmail.com",
        password:"$2b$10$xE5O5dFGq3YsM/x.mAVreeqWO6QTjN8jrzPL.DzxW5jijFUVPjahe",
        profileURL:"https://loff.it/wp-content/uploads/2020/07/loffit-el-nuevo-video-de-la-cantante-francesa-soko-es-una-de-romanos-01-600x450.jpg",
        description: "Virtute equidem ceteros in mel. Id volutpat neglegentur eos. Eu eum facilisis voluptatum, no eam albucius verterem. Sit congue platonem adolescens ut. Offendit reprimique et has, eu mei homero imperdiet.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",        
        artistType:["Singer","Songwriter", "Producer"],  //checkbox  https://soundbetter.com/s
        location:"France",
        genre:"Indie pop, indietronica, folk-pop, new wave",
        instrument:["Guitar", "Bass", "Keyboard"],  //checkbox https://soundbetter.com/s
        spotifyLink:"https://open.spotify.com/artist/4Q3f2YYH4gQxWFS3WY5G3j?si=taybTYTISZmXbXbq9Z2_7Q",
        spotifyEmbed:'<iframe src="https://open.spotify.com/embed/artist/4Q3f2YYH4gQxWFS3WY5G3j" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
        projectsOwned: [],
        projectsJoined:[],
        likedUsers:[]       
    },
    {
        username: "Bob",
        email: "Bob@gmail.com",
        password:"$2b$10$F3E0NpBFiU.iqTLfEBQbq.qfLHx9gE1gklWM.j7fQNtY8.iJXga/G",
        profileURL:"https://www.rawmusictv.com/images/og-share-image/bob-rock.jpg",
        description: "Virtute equidem ceteros in mel. Id volutpat neglegentur eos. Eu eum facilisis voluptatum, no eam albucius verterem. Sit congue platonem adolescens ut. Offendit reprimique et has, eu mei homero imperdiet.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",        
        artistType:["Beatmaker","Producer"],  //checkbox  https://soundbetter.com/s
        location:"USA",
        genre:"AmericanaCountryEDMPopPop-RockRock",
        instrument:["Ukelele", "Piano", "Sax"],  //checkbox https://soundbetter.com/s
        spotifyLink:"https://open.spotify.com/artist/485uL27bPomh29R4JmQehQ?si=l23UB7fDRxCz-FHJHu8DGw",
        spotifyEmbed:'<iframe src="https://open.spotify.com/embed/artist/485uL27bPomh29R4JmQehQ" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
        projectsOwned: [],
        projectsJoined:[],
        likedUsers:[]       
    },
    {
        username: "Sandee Chan",
        email: "sandee@gmail.com",
        password:"$2b$10$aQF4cRmbw.KLBszC9/hjcuOSYgrb847A/JV5hgC4KSG5Zpl8.q7Nu",
        profileURL:"https://icrvb3jy.xinmedia.com/solomo/article/138583/EAAF4DC7-7894-EACA-A246-0455796FAC0A.jpeg",
        description: "Virtute equidem ceteros in mel. Id volutpat neglegentur eos. Eu eum facilisis voluptatum, no eam albucius verterem. Sit congue platonem adolescens ut. Offendit reprimique et has, eu mei homero imperdiet.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",        
        artistType:["Singer","Songwriter","Producer"],  //checkbox  https://soundbetter.com/s
        location:"Taiwan",
        genre:"Pop",
        instrument:["Guitar","Violin"],  //checkbox https://soundbetter.com/s
        spotifyLink:"https://open.spotify.com/artist/50DjkxUjr341CAWEf6mEXS?si=vhOodDd6SS-qav7VTdDXPw",
        spotifyEmbed:'<iframe src="https://open.spotify.com/embed/artist/50DjkxUjr341CAWEf6mEXS" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
        projectsOwned: [],
        projectsJoined:[],
        likedUsers:[]  
    },
    {
        username: "Lana Del Rey",
        email: "lana@gmail.com",
        password:"$2b$10$qi2hrU0Tdsiv5VXaPyx2veYdJb9yF5PGA0RC9ZfWMuFbr5Xvew/em",
        profileURL:"https://blushmagfit.com/wp-content/uploads/2017/08/Lana-Profile-1024x1024.jpg",
        description: "Virtute equidem ceteros in mel. Id volutpat neglegentur eos. Eu eum facilisis voluptatum, no eam albucius verterem. Sit congue platonem adolescens ut. Offendit reprimique et has, eu mei homero imperdiet.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",        
        artistType:["Singer","Songwriter"],  //checkbox  https://soundbetter.com/s
        location:"New York",
        genre:"Baroque, popdream, poprock",
        instrument:["Piano"],  //checkbox https://soundbetter.com/s
        spotifyLink:"https://open.spotify.com/artist/00FQb4jTyendYWaN8pK0wa?si=yVCTjA1_RoCkkDX4_sbaxw",
        spotifyEmbed:'<iframe src="https://open.spotify.com/embed/artist/00FQb4jTyendYWaN8pK0wa" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
        projectsOwned: [],
        projectsJoined:[],
        likedUsers:[]  
    },
    {
        username: "Josh",
        email: "josh@gmail.com",
        password:"$2b$10$7OenFShG4D4PnDuLJNwNU.QO0UwSsiAJjJaRs1vZ8jMvtrrKCfA3.",
        profileURL:"https://res.cloudinary.com/soundbetter/image/upload/c_fill,f_auto,g_face:auto,h_533,q_90,w_763/v1588264123/assets/photos/123044/15235437_10156080223433504_4146828086613047412_o.jpg",
        description: "Virtute equidem ceteros in mel. Id volutpat neglegentur eos. Eu eum facilisis voluptatum, no eam albucius verterem. Sit congue platonem adolescens ut. Offendit reprimique et has, eu mei homero imperdiet.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",        
        artistType:["Producer"],  //checkbox  https://soundbetter.com/s
        location:"USA",
        genre:"Americana, Country, Electronic, Folk / Acoustic, Soft Pop",
        instrument:["Guitar","Keyboard"],  //checkbox https://soundbetter.com/s
        spotifyLink:"https://open.spotify.com/artist/1I7oHjCjMrMUz66v67yJJu?si=SD9DPJfiS1C79b96-jfE_Q",
        spotifyEmbed:'<iframe src="https://open.spotify.com/embed/artist/1I7oHjCjMrMUz66v67yJJu" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
        projectsOwned: [],
        projectsJoined:[],
        likedUsers:[]  
    },
    {
        username: "Arthur",
        email: "arthur@gmail.com",
        password:"$2b$10$5pWgK/UiBMJOnnnnSNJ1Wet06w6To7/ZrBi8lF9SM2Ynaf67T96wC",
        profileURL:"https://res.cloudinary.com/soundbetter/image/upload/c_fill,f_auto,g_face:auto,h_533,q_90,w_763/v1504775856/assets/photos/743/210853_10151171859210708_349368485_o.jpg",
        description: "Virtute equidem ceteros in mel. Id volutpat neglegentur eos. Eu eum facilisis voluptatum, no eam albucius verterem. Sit congue platonem adolescens ut. Offendit reprimique et has, eu mei homero imperdiet.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",        
        artistType:["Mixing engineer"],  //checkbox  https://soundbetter.com/s
        location:"USA",
        genre:"EDM, Heavy Metal, Hip Hop, House, Pop, Pop-RockRock",
        instrument:["Keyboard","Bass"],  //checkbox https://soundbetter.com/s
        spotifyLink:"https://open.spotify.com/artist/3iJJD5v7oIFUevW4N5w5cj?si=cemCvmtlSbW0TRrysh7t9A",
        spotifyEmbed:'<iframe src="https://open.spotify.com/embed/artist/3iJJD5v7oIFUevW4N5w5cj" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
        projectsOwned: [],
        projectsJoined:[],
        likedUsers:[]  
    },
    {
        username: "Albert Pastor",
        email: "albert@gmail.com",
        password:"$2b$10$s8oSMsiKYJKuY5Ap412.OuQMGZpXUPnFQ7TqTQKQEaY0RQoPq3N.2",
        profileURL:"https://cdn.mos.cms.futurecdn.net/CT5CNXjsQLaWrqVg7WYnzR.jpg",
        description: "Virtute equidem ceteros in mel. Id volutpat neglegentur eos. Eu eum facilisis voluptatum, no eam albucius verterem. Sit congue platonem adolescens ut. Offendit reprimique et has, eu mei homero imperdiet.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",        
        artistType:["Singer","Songwriter"],  //checkbox  https://soundbetter.com/s
        location:"Barcelona",
        genre:"Pop-RockRock",
        instrument:["Guitar"],  //checkbox https://soundbetter.com/s
        spotifyLink:"https://open.spotify.com/artist/4RskfpMo9xxUWtJmPaIaKF?si=mpIg3afDTfObbK_XqAxVZg",
        spotifyEmbed:'<iframe src="https://open.spotify.com/embed/artist/4RskfpMo9xxUWtJmPaIaKF" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
        projectsOwned: [],
        projectsJoined:[],
        likedUsers:[]  
    }

]
module.exports = users;