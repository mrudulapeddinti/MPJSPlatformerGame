var GAME_LEVELS = [
  ["                                                                                ",
   "                                                                 o              ",
   "                                                                o o             ",
   "                                                                o o             ",
   "                                                                                ",
   "                                                               yyyyy            ",
   "                                   o                                            ",
   "                                  o o                            y!!!!y  p      ",
   "                                                        yyyyy    y!!!!y         ",
   "                                 yyyyy            z              y!!!!y         ",
   "  xx                    o o                                       yvvy   o  xx  ",
   "  xx                                     p      xxxxxx                   o  xx  ",
   "  xx                   yyyyy                    xxxxxx                   o  xx  ",
   "  xx                                      yyyy  xxxxxx                  yyy xx  ",
   "  xx                                            xxxxxx           e   p      xx  ",
   "  xx         xxxxxxx                            xxxxxx                      xx  ",
   "  xx @       xxxxxxx                            xxxxxx              o o o o xx  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxx          xxxxxxxxxxxxxx  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxx          xxxxxxxxxxxxxx  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!xxxxxxxxxxxxxx!!!!!!!!!!xxxxxxxxxxxxxx  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!xxxxxxxxxxxxxx!!!!!!!!!!xxxxxxxxxxxxxx  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
   "                                                                                ",
   "                                                                                "],
  ["                                                                                                                  ",
   "                                                                                                                  ",
   "                                      yy!!!!!!!yy            yy!!!!!!!yy                 yy!!!!!!!yy              ",
   "                                      yy!!!!!!!yy            yy!!!!!!!yy                 yy!!!!!!!yy              ",
   "                                      yy!!!!!!!yy            yy!!!!!!!yy                 yy!!!!!!!yy              ",
   "                                      yyyvyvyvyyy            yyyvyvyvyyy                 yyyvyvyvyyy              ",
   "                                                                                                                  ",
   "                                                                                                        p         ",
   "                                                                                                                e ",
   "                                                                                                          o o o   ",
   "                                                                                                         o o o o  ",
   "                                                                                        p               xxxxxxxxxx",
   "                                                                                             o o o      xxxxxxxxxx",
   "                                                    xxxxx                                   yyyyyyy     xxxxxxxxxx",
   "                             o  o              o  p xxxxx                                               xxxxxxxxxx",
   "                                              yyy   xxx            o                                    xxxxxxxxxx",
   "                             yyyy                   xxx           o o               o xxx               xxxxxxxxxx",
   "                                                    xxx                           =yyyxxx!!!!!!!!!!!!!!!xxxxxxxxxx",
   "                 o  o  o  p           o  o  o  o    xxx   o      yyyyy                xxx!!!!!!!!!!!!!!!xxxxxxxxxx",
   "xx   @         xxxxxxxxxxx          xxxxxxxxxxxxxxxxxxx  o o              xxx o       xxxxxxxx!!!!!!!!!!xxxxxxxxxx",
   "xx  yyy   yyy  xxxxxxxxxxx          xxxxxxxxxxxxxxxxxxx o   o             xxxyyy      xxxxxxxx!!!!!!!!!!xxxxxxxxxx",
   "xx             xxxxxxxxxxx          xxxxxxxxxxxxxxxxxxxyyyyyyy            xxx              xxx!!!!!!!!!!xxxxxxxxxx",
   "xx             xxxxxxxxxxx          xxxxxxxxxxxxxxxxxxx                   xxx  o o o o o   xxx!!!!!!!!!!xxxxxxxxxx",
   "xx!!!!!!!!!!!!!xxxxxxxxxxx!!!!!!!!!!xxxxxxxxxxxxxxxxxxx                   xxxxxxxxp        xxx!!!!!!!!!!xxxxxxxxxx",
   "xx!!!!!!!!!!!!!xxxxxxxxxxx!!!!!!!!!!xxxxxxxxxxxxxxxxxxx                   xxxxxxxx       o xxxxxxxxxxxxxxxxxxxxxxx",
   "xx!!!!!!!!!!!!!xxxxxxxxxxx!!!!!!!!!!xxxxxxxxxxxxxxxxxxx                        xxxp   yyyyyxxxxxxxxxxxxxxxxxxxxxxx",
   "xx!!!!!!!!!!!!!xxxxxxxxxxx!!!!!!!!!!xxxxxxxxxxxxxxxxxxx                        xxx         xxxxxxxxxxxxxxxxxxxxxxx",
   "xx!!!!!!!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!xxx o o o z xxxxxxxxxxxxxxxxxxxxxxx",
   "xx!!!!!!!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
  ["                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                 |  |                                                         ",
   "                                                 !!!!                                                         ",
   "                                                 !!!!                                                         ",
   "                                            pppp !!!!                                                         ",
   "                                            pppp !!!!                                                         ",
   "                                   ppp           !!!!                       y!!!y         y!!!y               ",
   "                              o xxxxxxxxxx       !!!!                       yyvyy         yyvyy               ",
   "                             yyyxxxxxxxxxx       x!!!   pp                                                    ",
   "                        o       xxxxx            x!!!  pppp                                                   ",
   "                       yyy      xxxxx pp     o o x!!!  pppp                                                   ",
   "                       p        xxxxx pp    yyyyyx!!!           o o o o                                       ",
   "                             yyyxxxxx            !!!!          yyyyyxxxx                                      ",
   "                                xxxxx            !!!!               xxxx                                      ",
   "                   y!!!y        xxxxx            xxxx o o           xxxx                                      ",
   "                   yyvyy    o o xxxxx o o        xxxxyyyy=          xxxx                                      ",
   "                           xxxxxxxxxxyyyyy       xxxx               xxxx                                      ",
   "                           xxxxxxxxxx   pp       xxxx               xxxx                                      ",
   "                  p     o oxxxxxxxxxx   pp       xxxx      o        xxxx                                      ",
   "                        yyyxxxxxxxxxx            xxxx!!!!!xxx       xxxx                                      ",
   "                           xxxxxxxxxx        o o xxxxxxxxxx         xxxx o                                    ",
   "                     o     xxxxxxxxxx       yyyyyxxxx           o o xxxx o o                                  ",
   "                    yyy    xxxxxxxxxx            xxxx          =yyyyxxxx o o o                           e    ",
   "              y!!!y        xxxxxxxxxx         pp xxxx               xxxx o o o o       pp       pp            ",
   "              yyvyy        xxxxxxxxxx         pp xxxx        o      xxxx o o o o o o o o o o o o o o o o o o  ",
   "                       o o xxxxxxxxxx o o        xxxx       xxx!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ",
   "              p        xxxxxxxxxxxxxxyyyyy       xxxx         xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ",
   "                       xxxxxxxx                   p                                   xxxxxxxxxxxxxxxxxxxxxxx ",
   "           o  o      yyxxxxxxxx  o  o                  o o                o  o        xxxxxxxxxxxxxxxxxxxxxxx ",
   "                 yy    xxxxxxxx  o  o                 yyyyyy                          xxxxxxxxxxxxxxxxxxxxxxx ",
   "                       xxxxxxxx  o  o        o o o                  o o o      o o o  xxxxxxxxxxxxxxxxxxxxxxx ",
   "          yyyyyy  p    xxxxxxxx  o  o   pp  yyyyyyy                 yyyyyy!!!!yyyyyy  xxxxxxxxxxxxxxxxxxxxxxx ",
   "   @                 o xxxxxxxx  yyyy                              ppp   x!!!!x       xxxxxxxxxxxxxxxxxxxxxxx ",
   "  xxxx              xxxxxxxxxxx                                    ppp   xxvvxx   ppp xxxxxxxxxxxxxxxxxxxxxxx ",
   "  xxxx              xxx                                                           ppp xxxxxxxxxxxxxxxxxxxxxxx ",
   "  xxxx              xxx                                                               xxxxxxxxxxxxxxxxxxxxxxx ",
   "  xxxx              xxx                |                           o o o o o o o o z  xxxxxxxxxxxxxxxxxxxxxxx ",
   "  xxxx!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ",
   "  xxxx!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ",
   "  xxxx!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ",
   "  xxxx!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ",
   "                                                                                                              ",
   "                                                                                                              "],
  ["                                                                      pppp  e                                 ",
   "                y!!!y          y!!!y           y!!!y                  o o o                                   ",
   "                yyvyy          yyvyy           yyvyy                  o o o o                                 ",
   "                                                                      yyyyyyy                                 ",
   "                                                  ppp               yyyyyy                                    ",
   "                                                        o o   ppy                                             ",
   "                                     p            o   y  y  yppp                                              ",
   "                                              o p y                                                           ",
   "                              p        o     y p                                                             ",
   "                                   o    yy                                                                    ",
   "                                   yy                                                                         ",
   "                              o             yy                                                                ",
   "                        o     yy                                                                              ",
   "                        yy                                                                                    ",
   "                  o     ppppp        pppp       ppp                                                           ",
   "    pppp          yy                                                                                          ",
   "    pppppp                                                                                                    ",
   "    ppppppo o o o     o   o     o   o     o   o     o   o     o   o     o                                     ",
   "  !!!!!!!!   xxxx    =xx xx    =xx xx    =xx xx    =xx xx    =xx xx    =xx                                    ",
   "  | | | |   yxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                              xxxxxx",
   "             xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                ppp           xxxxxx",
   "  =       yyyxx    | |    xxxxx    | |    xxxxx    | |    xxxxx         pp    yyyy       ppppp          xxxxxx",
   "  =          xx           xxxxx           xxxxx           xxxxx ppp                                     xxxxxx",
   "  =      z   xx           xxxxx           xxxxx           xxxxx ppp             o  o  o  o  o  o  o o o xxxxxx",
   "  xxxxxxxxxxxxx       ppp xxxxx           xxxxx           xxxxx        xxxxxxxxxxxxxxxxxxxxxxxxxx o o yyxxxxxx",
   "  xxxxxxxxxxxxx       ppp xxxxx       ppp xxxxx           xxxxx        xxxxxxxxxxxxxxxxxxxxxxxxxx o o o xxxxxx",
   "  xx        ppp                               pp                    yyy o o xxxxxxxxxxxxxxxxxxxxxyy o o xxxxxx",
   "  xx        pp                                                          o o xxxxxxxxxxxxxxxxxxxxx o o o xxxxxx",
   "  xx              o o o    yyy    o o o    yyy    o o o    yyy    o o o o = xxxxxxxxxxxxxxxxxxxxx o o yyxxxxxx",
   "  xx             xxxxxxx         xxxxxxx         xxxxxxx         xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxyy     xxxxxx",
   "  xx @           xxxxxxx!!!!!!!!!xxxxxxx!!!!!!!!!xxxxxxx         xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!!xxxxxx",
   "  xxxxxxxxxxxxxxxxxxxxxx!!!!!!!!!xxxxxxx!!!!!!!!!xxxxxxx!!!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!!xxxxxx",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              "],
  ["                                                       ",
   " o o o o o o o o o o o o o o o o o o o o o o o o o o o ",
   " o o o o o o o o o o o o o o o o o o o o o o o o o o o ",
   "       o o xxo o o o xxo o o xxo o o xxo o o o xxo o o ",
   " @ z   o oxxxx o o oxxxx o oxxxx o oxxxx o o oxxxx o o ",
   "xxxxx  o o o o o o o o o o o o o o o o o o o o o o o xx",
   "xx o o o ww  ww wwwww ww ww  wwo o ww ww wwo oww o o xx",
   "xx o o o ww  ww ww ww ww ww  wwo o ww ww ww w ww o o xx",
   "xx o o o o ww o ww ww ww ww  ww ww ww ww wwo www o o xx",
   "xx o o o o ww o wwwww wwwww  wwwwwwww ww wwo oww o o xx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
