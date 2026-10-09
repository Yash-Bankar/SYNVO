from pathlib import Path
from PIL import Image
import math, shutil, json, xml.etree.ElementTree as ET
P=Path(__file__).parent
OLD=P.parent/'developer-handoff-2026-10-05'
INK='#262139'; CIT='#EEE99D'; ORANGE='#EE6747'; CHALK='#F6F4EE'
def save(name,body,w=800,h=600,title=None):
 title=title or name.replace('-',' ')
 (P/(name+'.svg')).write_text(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" role="img" aria-labelledby="title"><title id="title">{title}</title>{body}</svg>')
def text(x,y,s,size=26,color=INK,weight=400):
 return f'<text x="{x}" y="{y}" font-family="Arial, sans-serif" font-size="{size}" font-weight="{weight}" fill="{color}">{s}</text>'
def rect(x,y,w,h,c,r=0):return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{r}" fill="{c}"/>'
def path(d,c=INK,stroke=None):return f'<path d="{d}" fill="{c}"'+(f' stroke="{stroke}" stroke-width="3"' if stroke else '')+'/>'
def simplify(pts,eps=1.0):
 if len(pts)<3:return pts
 a,b=pts[0],pts[-1]; dx=b[0]-a[0];dy=b[1]-a[1];den=math.hypot(dx,dy)
 ds=[abs(dy*(p[0]-a[0])-dx*(p[1]-a[1]))/den if den else math.hypot(p[0]-a[0],p[1]-a[1]) for p in pts]
 i=max(range(len(ds)),key=ds.__getitem__)
 return simplify(pts[:i+1],eps)[:-1]+simplify(pts[i:],eps) if ds[i]>eps else [a,b]
def trace(name,filename,palette):
 im=Image.open(OLD/'assets'/filename).convert('RGBA');im.thumbnail((768,512));w,h=im.size
 rgb=[tuple(int(c[i:i+2],16) for i in (1,3,5)) for c in palette]
 px=list(im.getdata());labels=[]
 for r,g,b,a in px:
  labels.append(-1 if a<128 else min(range(len(rgb)),key=lambda i:sum((v-t)**2 for v,t in zip((r,g,b),rgb[i]))))
 body=''
 for label,color in enumerate(palette):
  edges={}
  def inside(x,y):return 0<=x<w and 0<=y<h and labels[y*w+x]==label
  def edge(a,b):edges.setdefault(a,[]).append(b)
  for y in range(h):
   for x in range(w):
    if not inside(x,y):continue
    if not inside(x,y-1):edge((x,y),(x+1,y))
    if not inside(x+1,y):edge((x+1,y),(x+1,y+1))
    if not inside(x,y+1):edge((x+1,y+1),(x,y+1))
    if not inside(x-1,y):edge((x,y+1),(x,y))
  loops=[]
  while edges:
   start=next(iter(edges));p=start;pts=[p]
   while p in edges:
    q=edges[p].pop()
    if not edges[p]:del edges[p]
    pts.append(q);p=q
    if p==start:break
   area=abs(sum(a[0]*b[1]-b[0]*a[1] for a,b in zip(pts,pts[1:]))/2)
   if area<35:continue
   # split a closed contour in half for stable simplification
   mid=len(pts)//2;pts=simplify(pts[:mid+1])[:-1]+simplify(pts[mid:])
   if pts[-1]==pts[0]:pts=pts[:-1]
   mids=[((a[0]+b[0])/2,(a[1]+b[1])/2) for a,b in zip(pts,pts[1:]+pts[:1])]
   d=f'M{mids[-1][0]:.2f},{mids[-1][1]:.2f}'
   for (x,y),(mx,my) in zip(pts,mids):d+=f' Q{x},{y} {mx:.2f},{my:.2f}'
   loops.append(d+' Z')
  body+=f'<path fill="{color}" fill-rule="evenodd" d="'+ ' '.join(loops)+'"/>'
 save(name,body,w,h)
trace('hero-sy-ribbon','hero-sy.png',[CIT,INK])
trace('folded-book','folded-book.png',[ORANGE,INK,CHALK])
save('starting-point',f'<rect x="60" y="100" width="270" height="270" fill="none" stroke="{INK}" stroke-width="6"/>'+rect(520,100,230,270,INK)+path('M280 370 A240 240 0 0 1 520 130 L520 230 A140 140 0 0 0 380 370 Z'),800,440)
save('paper-fold',path('M70 410 L340 90 L740 340 L400 470 Z',CIT)+path('M340 90 L480 310 L740 340 Z',ORANGE)+path('M340 90 L400 470 L480 310 Z',CHALK),800,550)
save('diagonal-ribbon',path('M0 410 L800 80 L800 220 L0 550 Z',CHALK),800,600)
for name,col in [('sy-monogram',INK),('sy-monogram-persimmon',ORANGE)]:
 save(name,path('M245 60 C145 20 55 50 55 122 C55 185 110 192 170 212 C205 224 205 243 180 252 C144 264 105 250 70 225 L30 287 C92 336 225 340 266 265 C301 191 247 160 172 140 C124 126 122 105 160 101 C188 98 217 111 239 124 Z',col)+path('M295 50 L377 50 L433 204 L493 50 L575 50 L458 340 C439 391 399 420 330 420 L311 351 C352 351 378 342 391 306 Z',col),610,450)
save('wordmark-synvo',text(0,78,'SYNVO',84,INK,700),360,100)
save('observation-brace',f'<path d="M75 10 C35 10 35 25 35 70 L35 140 Q35 180 10 190 Q35 200 35 240 L35 310 C35 350 35 370 75 370" fill="none" stroke="{INK}" stroke-width="4"/>',90,390)
for name,d in [('arrow-right','M6 24 H42 M28 10 L42 24 L28 38'),('arrow-left','M42 24 H6 M20 10 L6 24 L20 38'),('chevron-down','M8 16 L24 32 L40 16'),('plus','M24 8 V40 M8 24 H40'),('minus','M8 24 H40'),('close','M10 10 L38 38 M38 10 L10 38'),('menu','M7 12 H41 M7 24 H41 M7 36 H41')]:
 save(name,f'<path d="{d}" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',48,48)
save('chapter-dots', ''.join(f'<circle cx="20" cy="{20+i*35}" r="6" fill="{INK if i==0 else "none"}" stroke="{INK}"/>' for i in range(7)),40,250)
save('reading-progress',rect(0,0,800,4,'#DEDCD6',2)+rect(0,0,220,4,ORANGE,2),800,4)
save('application-button',rect(0,0,340,56,INK,28)+text(48,36,'Apply to Synvo →',20,CHALK),340,56)
save('company-petal',path('M80 20 H260 L345 170 V280 L200 360 L40 280 V65 Q40 20 80 20 Z',ORANGE),390,390)
save('partnership-map',path('M50 30 H260 L350 175 V285 L180 375 L50 285 Z',ORANGE)+path('M550 30 H740 V285 L570 375 L400 285 V175 Z',INK)+path('M220 395 L390 300 L580 395 V515 L400 585 L220 515 Z','#C8BECC')+path('M295 285 L400 225 L510 285 V410 L400 470 L295 410 Z',CHALK,INK)+text(84,90,'You',32,INK,700)+text(84,132,'Audience understanding.',18)+text(84,164,'Product direction.',18)+text(545,90,'Synvo',32,CHALK,700)+text(545,132,'Development funding.',18,CHALK)+text(545,164,'Product and company build.',18,CHALK)+text(325,353,'Company',27,INK,700)+text(277,504,'Operating team',27,INK,700)+text(320,543,'Daily operation.',20),800,620)
def flow(vertical):
 nodes=['Understand the problem','Test the opportunity','Agree on the partnership','Build the company'];body=''
 for i,s in enumerate(nodes):
  x,y=(40,30+i*120) if vertical else (30+i*275,40)
  body+=rect(x,y,250,74,[CHALK,CIT,CHALK,INK][i],28)+text(x+15,y+43,s,18,CHALK if i==3 else INK)
  if i<3:body+=f'<path d="'+(f'M165 {y+74} v46 l-6 -10 m6 10 l6 -10' if vertical else f'M{x+250} 77 h25 l-8 -6 m8 6 l-8 6')+f'" stroke="{INK}" fill="none"/>'
 x,y=(340,150) if vertical else (305,185)
 body+=rect(x,y,240,75,ORANGE,20)+text(x+15,y+42,'Stop if evidence is weak.',18)
 body+=f'<path d="'+('M290 187 H340 l-10 -6 m10 6 l-10 6' if vertical else 'M430 114 V185 l-6 -10 m6 10 l6 -10')+f'" stroke="{INK}" fill="none"/>'
 save('evidence-flow-'+('mobile' if vertical else 'desktop'),body,620 if vertical else 1140,520 if vertical else 290)
flow(True);flow(False)
save('course-illustration',path('M30 80 Q100 50 165 95 Q235 50 300 80 V230 Q235 200 165 245 Q100 200 30 230 Z',ORANGE)+path('M165 95 V245','none',INK)+f'<circle cx="490" cy="105" r="35" fill="{ORANGE}"/>'+path('M435 155 Q490 125 535 175 L575 250 H435 Z')+path('M555 250 L600 140 H700 L655 250 Z'),760,300)
save('resource-illustration',''.join(rect(30+j*80,70+i*80,70,70,[ORANGE,INK,CIT][(i+j)%3]) for i in range(2) for j in range(3))+path('M400 220 Q450 145 510 190 L570 220 L650 175 Q685 170 680 200 L590 260 H450 Z')+rect(520,80,130,110,CIT)+f'<path d="M540 105 H625 M540 130 H625 M540 155 H600" stroke="{INK}" stroke-width="5"/>',760,300)
save('software-illustration',f'<circle cx="55" cy="70" r="25" fill="{CIT}"/>'+rect(30,115,50,50,CIT)+path('M30 220 L55 175 L80 220 Z',CIT)+f'<path d="M95 70 H180 Q210 70 210 135 H285 M95 140 H285 M95 210 H180 Q210 210 210 145 H285 M450 140 H550 M650 220 V260 H110 V230" stroke="{CHALK}" stroke-width="5" fill="none"/>'+''.join(f'<rect x="345" y="65" width="45" height="150" rx="5" fill="{CIT}" transform="rotate({i*45} 367 140)"/>' for i in range(4))+f'<circle cx="367" cy="140" r="30" fill="{INK}"/>'+rect(570,80,130,130,CIT)+f'<path d="M590 110 H680 M590 140 H680 M590 170 H650" stroke="{INK}" stroke-width="5"/>',760,300)
for name,d in [('audience-thumbnail','M0 0 H240 V240 H0 Z'),('recurring-value-thumbnail','M0 240 L240 0 V240 Z')]:save(name,path(d,CIT)+path('M0 240 Q0 0 240 240 Z',ORANGE),240,240)
for f in (OLD/'assets/article-figures').glob('*.svg'):
 dest=P/'article-figures'/f.name;dest.parent.mkdir(exist_ok=True);shutil.copy2(f,dest)
manifest=[]
for f in sorted(P.rglob('*.svg')):
 root=ET.parse(f).getroot();assert not any(el.tag.split('}')[-1] in ['image','script','foreignObject'] for el in root.iter())
 manifest.append({'file':str(f.relative_to(P)),'viewBox':root.attrib.get('viewBox'),'bytes':f.stat().st_size})
(P/'manifest.json').write_text(json.dumps(manifest,indent=2))
print('Validated',len(manifest),'native SVG files.')
