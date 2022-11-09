function generateHtmlContent(options){
  return `
        <div class="div1 letter"  id="b">B</div>
        <div class="div2"  id="b_1"><my-card><span slot="my-text">${options.B1}</span></my-card></div>
        <div class="div3"  id="b_2"><my-card><span slot="my-text">${options.B2}</span></my-card></div>
        <div class="div4"  id="b_3"><my-card><span slot="my-text">${options.B3}</span></my-card></div>
        <div class="div5"  id="b_4"><my-card><span slot="my-text">${options.B4}</span></my-card></div>
        <div class="div6"  id="b_5"><my-card><span slot="my-text">${options.B5}</span></my-card></div>
        <div class="div7 letter"  id="i">I</div>
        <div class="div8"  id="i_1"><my-card><span slot="my-text">${options.I1}</span></my-card></div>
        <div class="div9"  id="i_2"><my-card><span slot="my-text">${options.I2}</span></my-card></div>
        <div class="div10" id="i_3"><my-card><span slot="my-text">${options.I3}</span></my-card></div>
        <div class="div11" id="i_4"><my-card><span slot="my-text">${options.I4}</span></my-card></div>
        <div class="div12" id="i_5"><my-card><span slot="my-text">${options.I5}</span></my-card></div>
        <div class="div13 letter" id="n">N</div>
        <div class="div14" id="n_1"><my-card><span slot="my-text">${options.N1}</span></my-card></div>
        <div class="div15" id="n_2"><my-card><span slot="my-text">${options.N2}</span></my-card></div>
        <div class="div16 free" id="n_3"><span>BINGO</span><span>2000</span></div>
        <div class="div17" id="n_4"><my-card><span slot="my-text">${options.N4}</span></my-card></div>
        <div class="div18" id="n_5"><my-card><span slot="my-text">${options.N5}</span></my-card></div>
        <div class="div19 letter" id="g">G </div>
        <div class="div20" id="g_1"><my-card><span slot="my-text">${options.G1}</span></my-card></div>
        <div class="div21" id="g_2"><my-card><span slot="my-text">${options.G2}</span></my-card></div>
        <div class="div22" id="g_3"><my-card><span slot="my-text">${options.G3}</span></my-card></div>
        <div class="div23" id="g_4"><my-card><span slot="my-text">${options.G4}</span></my-card></div>
        <div class="div24" id="g_5"><my-card><span slot="my-text">${options.G5}</span></my-card></div>
        <div class="div25 letter" id="o">O </div>
        <div class="div26" id="o_1"><my-card><span slot="my-text">${options.O1}</span></my-card></div>
        <div class="div27" id="o_2"><my-card><span slot="my-text">${options.O2}</span></my-card></div>
        <div class="div28" id="o_3"><my-card><span slot="my-text">${options.O3}</span></my-card></div>
        <div class="div29" id="o_4"><my-card><span slot="my-text">${options.O4}</span></my-card></div>
        <div class="div30" id="o_5"><my-card><span slot="my-text">${options.O5}</span></my-card></div>
  `;
}


module.exports = {
    generateHtmlContent
}