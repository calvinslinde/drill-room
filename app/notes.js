/* Explanations added after reviewing mistakes. Newest first.
   Each: {id, date, title, body (HTML)} */
const NOTES = [
 {id:"n_renal_gradient", date:"2026-08-27", title:"Renal — build vs spend, and what NKCC2 actually is",
  body:`<p>Two points that keep mattering:</p>
  <p><strong>NKCC2 is secondary active transport.</strong> It burns no ATP itself — it rides the sodium gradient the Na⁺/K⁺-ATPase creates on the basolateral side. NKCC2 is the doorway; the ATPase is the engine. Primary vs secondary is decided by the <em>immediate</em> energy source, never by how important the transporter is downstream.</p>
  <p><strong>Destroying the gradient gives dilute urine, not salty urine.</strong> No gradient means the collecting duct has nothing to pull water out with, so water stays in the tube — high volume, low osmolarity. The direction trips people because "losing the concentrating mechanism" sounds like it should concentrate something.</p>
  <p><strong>The PCT reabsorbs ~65%</strong> of everything filtered and needs no medullary gradient at all — isotonic bulk work in the cortex. The loop is clever so it eats attention, but two-thirds of the job is done before filtrate ever reaches it.</p>
  <p><strong>The descending limb pumps nothing.</strong> Purely passive: water leaves because the outside is saltier. All pumping is ascending-limb only, and water impermeability there is the precondition for the gradient existing at all.</p>`}
];
