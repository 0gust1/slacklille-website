#version 300 es

precision mediump float;

out vec4 fragColor;

uniform vec2 u_resolution;
uniform vec2 u_offset;
uniform float u_time;

void main()
{
    //Clear fragcolor
    fragColor *= 0.;
    
    //Relative star position
    vec2 p,
    //Resolution for scaling and centering
    r = u_resolution.xy;
    
    //Loop 10 times
    for(float i=0.,f; i++<1e1;
        //Fade toward back and attenuate lighting
        fragColor += (1e1-f)/max(length(p=mod((gl_FragCoord.xy+gl_FragCoord.xy-r)/r.y*f*
        //Rotate layers 
        mat2(cos(i+vec4(0,33,11,0))),2.)-1.)
        //Make 5 pointed-stars
        +cos(atan(p.y,p.x)*5.+u_time*cos(i))/3e1
        //Blue tint
        -vec4(7,8,9,0)/6e1,.01)/8e2)
        
        //Compute distance to back
        f = mod(i-u_time,1e1);
}