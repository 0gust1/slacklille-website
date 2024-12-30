#version 300 es

precision mediump float;

out vec4 fragColor;

uniform vec2 u_resolution;
uniform vec2 u_offset;
uniform float u_time;

// Original code by oneshade, from: https://www.shadertoy.com/view/X3tczB

// Hash without Sine
// MIT License...
/* Copyright (c)2014 David Hoskins.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.*/

//----------------------------------------------------------------------------------------
//  1 out, 1 in...
float hash11(float p) {
  p = fract(p * .1031f);
  p *= p + 33.33f;
  p *= p + p;
  return fract(p);
}

//----------------------------------------------------------------------------------------
//  1 out, 2 in...
float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * .1031f);
  p3 += dot(p3, p3.yzx + 33.33f);
  return fract((p3.x + p3.y) * p3.z);
}

//----------------------------------------------------------------------------------------
//  1 out, 3 in...
float hash13(vec3 p3) {
  p3 = fract(p3 * .1031f);
  p3 += dot(p3, p3.zyx + 31.32f);
  return fract((p3.x + p3.y) * p3.z);
}
//----------------------------------------------------------------------------------------
// 1 out 4 in...
float hash14(vec4 p4) {
  p4 = fract(p4 * vec4(.1031f, .1030f, .0973f, .1099f));
  p4 += dot(p4, p4.wzxy + 33.33f);
  return fract((p4.x + p4.y) * (p4.z + p4.w));
}

//----------------------------------------------------------------------------------------
//  2 out, 1 in...
vec2 hash21(float p) {
  vec3 p3 = fract(vec3(p) * vec3(.1031f, .1030f, .0973f));
  p3 += dot(p3, p3.yzx + 33.33f);
  return fract((p3.xx + p3.yz) * p3.zy);

}

//----------------------------------------------------------------------------------------
///  2 out, 2 in...
vec2 hash22(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(.1031f, .1030f, .0973f));
  p3 += dot(p3, p3.yzx + 33.33f);
  return fract((p3.xx + p3.yz) * p3.zy);

}

//----------------------------------------------------------------------------------------
///  2 out, 3 in...
vec2 hash23(vec3 p3) {
  p3 = fract(p3 * vec3(.1031f, .1030f, .0973f));
  p3 += dot(p3, p3.yzx + 33.33f);
  return fract((p3.xx + p3.yz) * p3.zy);
}

//----------------------------------------------------------------------------------------
//  3 out, 1 in...
vec3 hash31(float p) {
  vec3 p3 = fract(vec3(p) * vec3(.1031f, .1030f, .0973f));
  p3 += dot(p3, p3.yzx + 33.33f);
  return fract((p3.xxy + p3.yzz) * p3.zyx);
}

//----------------------------------------------------------------------------------------
///  3 out, 2 in...
vec3 hash32(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(.1031f, .1030f, .0973f));
  p3 += dot(p3, p3.yxz + 33.33f);
  return fract((p3.xxy + p3.yzz) * p3.zyx);
}

//----------------------------------------------------------------------------------------
///  3 out, 3 in...
vec3 hash33(vec3 p3) {
  p3 = fract(p3 * vec3(.1031f, .1030f, .0973f));
  p3 += dot(p3, p3.yxz + 33.33f);
  return fract((p3.xxy + p3.yxx) * p3.zyx);

}

//----------------------------------------------------------------------------------------
// 4 out, 1 in...
vec4 hash41(float p) {
  vec4 p4 = fract(vec4(p) * vec4(.1031f, .1030f, .0973f, .1099f));
  p4 += dot(p4, p4.wzxy + 33.33f);
  return fract((p4.xxyz + p4.yzzw) * p4.zywx);

}

//----------------------------------------------------------------------------------------
// 4 out, 2 in...
vec4 hash42(vec2 p) {
  vec4 p4 = fract(vec4(p.xyxy) * vec4(.1031f, .1030f, .0973f, .1099f));
  p4 += dot(p4, p4.wzxy + 33.33f);
  return fract((p4.xxyz + p4.yzzw) * p4.zywx);

}

//----------------------------------------------------------------------------------------
// 4 out, 3 in...
vec4 hash43(vec3 p) {
  vec4 p4 = fract(vec4(p.xyzx) * vec4(.1031f, .1030f, .0973f, .1099f));
  p4 += dot(p4, p4.wzxy + 33.33f);
  return fract((p4.xxyz + p4.yzzw) * p4.zywx);
}

//----------------------------------------------------------------------------------------
// 4 out, 4 in...
vec4 hash44(vec4 p4) {
  p4 = fract(p4 * vec4(.1031f, .1030f, .0973f, .1099f));
  p4 += dot(p4, p4.wzxy + 33.33f);
  return fract((p4.xxyz + p4.yzzw) * p4.zywx);
}

void drawLayer(in vec2 uv, inout vec3 color, float brightness, float layerId) {
  float colId = floor(uv.x * 2.0f);
  uv.x -= colId * 0.5f + 0.25f;
  uv.y -= u_time * (1.75f + 0.5f * hash12(vec2(colId * 17.4f + 13.1f, layerId))) * 0.25f + hash12(vec2(colId, layerId)) * 2.5f;
  float rowId = floor(uv.y / 0.75f);
  uv.y = uv.y - (rowId + 1.0f) * 0.75f;
  vec2 warpUv = vec2(uv.x * 0.8f, 0.15f * uv.y + exp(uv.y * 25.0f));
  float mask = step(0.5f, hash13(vec3(colId, rowId, layerId)));
  vec3 dropColor = pow(vec3(0.98f, 0.93f, 0.1f), vec3(max(0.0f, length(warpUv) * 2000.0f - 20.0f)));
  dropColor = mix(dropColor, dropColor.bgr, hash14(vec4(colId, rowId, layerId, 13.1f)));
  color += dropColor * mask * brightness;
}

void main() {
  vec2 uv = (gl_FragCoord.xy - vec2(0.5f * u_resolution.x, 0.0f)) / u_resolution.y;
  uv.y = 1.0f - uv.y;
  vec3 color = vec3(0.0f);

  for(float n = 0.0f; n < 20.0f; n ++) {
    vec2 p = uv;
    p *= n + 1.0f;
    p += hash21(n);
    drawLayer(p, color, exp(- n * 0.1f), n);
  }

  fragColor = vec4(color, 1.0f);
}