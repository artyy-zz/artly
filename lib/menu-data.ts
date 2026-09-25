export const menuData: Record<string, {
  title: string;
  note: string;
  sections: { name: string; items: [string, string][] }[];
}> = {
  "vila-noma": { title: "Në tavolinën tonë", note: "Përbërës të stinës. Receta që bashkojnë.", sections: [
    { name: "Paragjella", items: [["Bruschetta e shtëpisë", "Domate, borzilok dhe vaj ulliri"], ["Sallatë Cezar", "Pulë, sallatë e freskët dhe parmezan"], ["Supë e ditës", "Me perimet më të freskëta të stinës"]] },
    { name: "Pjata kryesore", items: [["Pasta me tartuf", "Pasta e freskët dhe krem kërpudhash"], ["Fileto pule në skarë", "Perime të stinës dhe salcë limoni"], ["Biftek i shtëpisë", "Patate të pjekura dhe gjalpë me erëza"], ["Risotto me perime", "Oriz kremoz dhe perime sezonale"]] },
    { name: "Për ta mbyllur ëmbël", items: [["Tiramisu", "Kafe, mascarpone dhe kakao"], ["Cheesecake", "Krem djathi dhe fruta pylli"], ["Limonadë e freskët", "Limon dhe nenexhik"]] },
  ] },
  "kafe-noir": { title: "Mëngjesi ka shije.", note: "Kafe e freskët · Prizren · Çdo ditë 07:00–22:00", sections: [
    { name: "Kafe, sipas dëshirës", items: [["Espresso", "E shkurtër dhe me karakter"], ["Macchiato", "Espresso me pak qumësht"], ["Cappuccino", "Espresso dhe shkumë e butë"], ["Latte", "Më shumë qumësht, shije e butë"], ["Kafe e ftohtë", "Espresso mbi akull"]] },
    { name: "Nga furra", items: [["Kroasant me gjalpë", "I ngrohtë, çdo mëngjes"], ["Kroasant me çokollatë", "Petë të buta dhe çokollatë"], ["Sanduiç i mëngjesit", "Djathë, domate dhe rukola"]] },
    { name: "Pak më ndryshe", items: [["Mëngjesi Noir", "Cappuccino dhe kroasant me gjalpë"], ["Limonadë", "Limon i freskët dhe nenexhik"], ["Çaj mali", "Me mjaltë dhe limon"]] },
  ] },
  "sofra-21": { title: "Mirë se erdhët në sofër.", note: "Tradita jonë, e gatuar çdo ditë me kujdes.", sections: [
    { name: "Për të nisur", items: [["Djathë i bardhë me speca", "Speca të pjekur dhe vaj ulliri"], ["Sallatë e stinës", "Domate, kastravec dhe qepë"], ["Bukë e shtëpisë", "E ngrohtë, nga furra"]] },
    { name: "Nga kuzhina e shtëpisë", items: [["Flija e shtëpisë", "Me mazë dhe ajkë"], ["Tavë me mish viçi", "E pjekur ngadalë me perime"], ["Speca të mbushur", "Mish, oriz dhe salcë domatesh"], ["Qofte në skarë", "Qepë, bukë dhe patate"]] },
    { name: "Ëmbël dhe freskët", items: [["Bakllava", "Arra dhe sherbet i lehtë"], ["Trileçe", "Karamel dhe tri lloje qumështi"], ["Kos i shtëpisë", "I freskët dhe i butë"]] },
  ] },
  "era-restorant": { title: "Mbrëmja në Era", note: "Një përzgjedhje për darka që zgjasin pak më shumë.", sections: [
    { name: "Hyrja", items: [["Carpaccio viçi", "Rukola, parmezan dhe limon"], ["Burrata me domate", "Vaj ulliri dhe borzilok"], ["Supë krem kërpudhash", "Kërpudha dhe bukë e thekur"]] },
    { name: "Pjata kryesore", items: [["Fileto viçi", "Pure patatesh dhe salcë piperash"], ["Salmon në skarë", "Perime të gjelbra dhe limon"], ["Pasta me karkaleca", "Domate të vogla dhe majdanoz"], ["Risotto me tartuf", "Parmezan i stazhonuar"]] },
    { name: "Prekja e fundit", items: [["Fondant çokollate", "Akullore vanilje"], ["Panna cotta", "Salcë frutash pylli"], ["Ujë mineral", "Shërbehet i ftohtë"]] },
  ] },
  "lumi-bistro": { title: "Drekë me shije.", note: "Thjesht, freskët, çdo ditë · Pejë", sections: [
    { name: "Diçka e lehtë", items: [["Sallatë pule", "Pulë në skarë, sallatë dhe avokado"], ["Supë domatesh", "Borzilok dhe bukë e thekur"], ["Bruschetta", "Domate të freskëta dhe djathë"]] },
    { name: "Dreka jonë", items: [["Pulë me oriz", "Fileto pule, oriz dhe perime"], ["Pasta pesto", "Pesto shtëpie dhe parmezan"], ["Burger Lumi", "Mish viçi, djathë dhe patate"], ["Sanduiç vegjetarian", "Perime të pjekura dhe hummus"]] },
    { name: "Pije dhe ëmbëlsira", items: [["Lëng portokalli", "I shtrydhur në moment"], ["Limonadë", "Limon, nenexhik dhe akull"], ["Brownie", "Çokollatë e zezë dhe arra"]] },
  ] },
  flaka: { title: "Nxehtë. Fiks për ty.", note: "Përgatitur në moment · Prishtinë", sections: [
    { name: "Burgerat", items: [["Klasiku", "Mish viçi, djathë dhe salcë Flaka"], ["Dyfish", "Dy mishra, dy djathëra, më shumë shije"], ["Pikanti", "Mish viçi, spec djegës dhe qepë"], ["Krokanti", "Pulë krokante dhe sallatë"]] },
    { name: "Bëje vakt", items: [["Oferta Flaka", "Klasiku, patate dhe pije"], ["Patate të skuqura", "Kripë dhe erëza shtëpie"], ["Unaza qepe", "Krokante, me salcë"]] },
    { name: "Freskohu", items: [["Pije e gazuar", "E ftohtë"], ["Limonadë", "E freskët, me akull"], ["Milkshake", "Vanilje ose çokollatë"]] },
  ] },
};
