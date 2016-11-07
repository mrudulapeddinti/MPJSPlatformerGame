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
   "  xx                                            xxxxxx                      xx  ",
   "  xx         xxxxxxx                            xxxxxx                      xx  ",
   "  xx @       xxxxxxx                            xxxxxx          p o o o o o xx  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxx          xxxxxxxxxxxxxx  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxx          xxxxxxxxxxxxxx  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!xxxxxxxxxxxxxx!!!!!!!!!!xxxxxxxxxxxxxx  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!xxxxxxxxxxxxxx!!!!!!!!!!xxxxxxxxxxxxxx  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
   "                                                                                ",
   "                                                                                "],
  ["                                                                                                                  ",
   "                                                                                                                  ",
   "                                      xx!!!!!!!xx            xx!!!!!!!xx                 xx!!!!!!!xx              ",
   "                                      xx!!!!!!!xx            xx!!!!!!!xx                 xx!!!!!!!xx              ",
   "                                      xx!!!!!!!xx            xx!!!!!!!xx                 xx!!!!!!!xx              ",
   "                                      xxxvxvxvxxx            xxxvxvxvxxx                 xxxvxvxvxxx              ",
   "                                                                                                                  ",
   "                                                                                                        p         ",
   "                                                                                                                  ",
   "                                                                                                          o o o   ",
   "                                                                                                         o o o o  ",
   "                                                                                                        xxxxxxxxxx",
   "                                                                                             o o o      xxxxxxxxxx",
   "                                                    xxxxx                                   yyyyyyy     xxxxxxxxxx",
   "                             o  o              o  p xxxxx                                               xxxxxxxxxx",
   "                                              yyy   xxx            o                    p               xxxxxxxxxx",
   "                             yyyy                   xxx           o o               o xxx               xxxxxxxxxx",
   "                                                    xxx                           =yyyxxx!!!!!!!!!!!!!!!xxxxxxxxxx",
   "                 o  o  o  p           o  o  o  o    xxx   o      yyyyy                xxx!!!!!!!!!!!!!!!xxxxxxxxxx",
   "xx      @      xxxxxxxxxxx          xxxxxxxxxxxxxxxxxxx  o o              xxx o       xxxxxxxx!!!!!!!!!!xxxxxxxxxx",
   "xx     yyy     xxxxxxxxxxx          xxxxxxxxxxxxxxxxxxx o   o             xxxyyy      xxxxxxxx!!!!!!!!!!xxxxxxxxxx",
   "xx             xxxxxxxxxxx          xxxxxxxxxxxxxxxxxxxyyyyyyy            xxx              xxx!!!!!!!!!!xxxxxxxxxx",
   "xx             xxxxxxxxxxx          xxxxxxxxxxxxxxxxxxx                   xxx  o o o o o   xxx!!!!!!!!!!xxxxxxxxxx",
   "xx!!!!!!!!!!!!!xxxxxxxxxxx!!!!!!!!!!xxxxxxxxxxxxxxxxxxx                   xxxxxxxxp        xxx!!!!!!!!!!xxxxxxxxxx",
   "xx!!!!!!!!!!!!!xxxxxxxxxxx!!!!!!!!!!xxxxxxxxxxxxxxxxxxx                   xxxxxxxx       o xxxxxxxxxxxxxxxxxxxxxxx",
   "xx!!!!!!!!!!!!!xxxxxxxxxxx!!!!!!!!!!xxxxxxxxxxxxxxxxxxx                        xxx    yyyyyxxxxxxxxxxxxxxxxxxxxxxx",
   "xx!!!!!!!!!!!!!xxxxxxxxxxx!!!!!!!!!!xxxxxxxxxxxxxxxxxxx                        xxx       p xxxxxxxxxxxxxxxxxxxxxxx",
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
   "                                   ppp           !!!!                       x!!!x         x!!!x               ",
   "                              o xxxxxxxxxx       !!!!                       xxvxx         xxvxx               ",
   "                             yyyxxxxxxxxxx       x!!!   pp                                                    ",
   "                        o       xxxxx            x!!!  pppp                                                   ",
   "                       yyy      xxxxx pp     o o x!!!  pppp                                                   ",
   "                                xxxxx pp    yyyyyx!!!           o o o o                                       ",
   "                        pp   yyyxxxxx            !!!!          yyyyyxxxx                                      ",
   "                                xxxxx            !!!!               xxxx                                      ",
   "                   x!!!x        xxxxx            xxxx o o           xxxx                                      ",
   "                   xxvxx    o o xxxxx o o        xxxxyyyy=          xxxx                                      ",
   "                           xxxxxxxxxxyyyyy       xxxx               xxxx                                      ",
   "                           xxxxxxxxxx   pp       xxxx               xxxx                                      ",
   "                        o oxxxxxxxxxx   pp       xxxx      o        xxxx                                      ",
   "                        yyyxxxxxxxxxx            xxxx!!!!!xxx       xxxx                                      ",
   "                           xxxxxxxxxx        o o xxxxxxxxxx         xxxx o                                    ",
   "                     o     xxxxxxxxxx       yyyyyxxxx           o o xxxx o o                                  ",
   "                    yyy    xxxxxxxxxx            xxxx          =yyyyxxxx o o o                                ",
   "              x!!!x  pp    xxxxxxxxxx        ppp xxxx               xxxx o o o o       pp       pp            ",
   "              xxvxx        xxxxxxxxxx        ppp xxxx        o      xxxx o o o o o o o o o o o o o o o o o o  ",
   "                       o o xxxxxxxxxx o o        xxxx       xxx!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ",
   "                       xxxxxxxxxxxxxxyyyyy       xxxx         xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ",
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
  ["                                                                      ppppppp                                 ",
   "                x!!!x          x!!!x           x!!!x                  o o o o                                 ",
   "                xxvxx          xxvxx           xxvxx                  o o o o                                 ",
   "                                                                      xxxxxxx                                 ",
   "                                                  ppp               xxxxxx                                    ",
   "                                                        o o   ppy                                             ",
   "                                     p            o   y  y  yppp                                              ",
   "                                              o p y                                                           ",
   "                                        o     y p                                                             ",
   "                               p   o    yy                                                                    ",
   "                                   yy                                                                         ",
   "                              o             yy                                                                ",
   "                        o     yy                                                                              ",
   "                        yy                                                                                    ",
   "                  o     ppppp        pppp       ppp                                                           ",
   "    pppp          yy                                                                                          ",
   "    pppppp                                                                                                    ",
   "    ppppppo o o o     o   o     o   o     o   o     o   o     o   o     o                                     ",
   "  !!!!!!!!   xxxx    =xx xx    =xx xx    =xx xx    =xx xx    =xx xx    =xx                                    ",
   "  | | | |    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                              xxxxxx",
   "             xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                ppp           xxxxxx",
   "  =          xx    | |    xxxxx    | |    xxxxx    | |    xxxxx         pp    yyyy       ppppp          xxxxxx",
   "  =          xx           xxxxx           xxxxx           xxxxx ppp                                     xxxxxx",
   "  =      z   xx           xxxxx           xxxxx           xxxxx ppp             o  o  o  o  o  o  o o o xxxxxx",
   "  xxxxxxxxxxxxx       ppp xxxxx           xxxxx           xxxxx        xxxxxxxxxxxxxxxxxxxxxxxxxx o o yyxxxxxx",
   "  xxxxxxxxxxxxx       ppp xxxxx       ppp xxxxx           xxxxx        xxxxxxxxxxxxxxxxxxxxxxxxxx o o o xxxxxx",
   "  xx        ppp                               pp                    yyy o o xxxxxxxxxxxxxxxxxxxxxyy o o xxxxxx",
   "  xx        pp                                                          o o xxxxxxxxxxxxxxxxxxxxx o o o xxxxxx",
   "  xx              o o o    yyy    o o o    yyy    o o o    yyy    o o o o = xxxxxxxxxxxxxxxxxxxxx o o yyxxxxxx",
   "  xx             xxxxxxx         xxxxxxx         xxxxxxx         xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxyy     xxxxxx",
   "  xx  @          xxxxxxx!!!!!!!!!xxxxxxx!!!!!!!!!xxxxxxx         xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!!xxxxxx",
   "  xxxxxxxxxxxxxxxxxxxxxx!!!!!!!!!xxxxxxx!!!!!!!!!xxxxxxx!!!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!!xxxxxx",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              "]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
