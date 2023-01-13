window.onload = function(){ 

                //Масcив с цитатами
        window.cit = [
                "<b>Горчица</b></br></br>Аромат горчицы, а также пар, полученный при выливании настоя горчицы на раскаленные камни, прекрасно помогает при радикулите, ревматизме, болях в спине, пояснице, суставах, ломоте в костях и мышцах. Также горчица является прекрасным лечебным средством при респираторных заболеваниях.",
                "<b>Эвкалипт</b></br></br>Листья эвкалипта обладают бактерицидными свойствами. Настойку эвкалипта разбавляют водой и выливают на раскаленные камни. Образующийся при этом пар способствует профилактике респираторных заболеваний, а также лечению многих хронических болезней органов дыхания, в том числе гайморита.",
                "<b>Хрен</b></br></br>Пар, образующийся от выливания настоя листьев хрена на камни, способствует профилактике гриппа, ОРЗ и ОРВИ. Кроме того, он помогает при кашле и насморке.",
                "<b>Мята перечная</b></br></br>Аромат мяты успокаивает нервную систему, понижает артериальное давление, улучшает настроение и благотворно воздействует на сердечно-сосудистую систему.",
                "<b>Липа</b></br></br> Настой цветков липы, вылитый на раскаленные камни, усиливает потоотделение и способствует профилактике респираторных заболеваний. Такой пар помогает при кашле, насморке и ломоте в суставах и мышцах.",
                "<b>Зверобой</b></br></br>Аромат зверобоя дезинфицирует помещение парной и обладает противовоспалительными и жаропонижающими свойствами. Пар, полученный от выливания настоя зверобоя на камни, способствует лечению заболеваний кожи, в частности угревой сыпи, повышению иммунитета.",
                "<b>Мать-и-мачеха</b></br></br>Аромат мать-и-мачехи используют в качестве противовоспалительного, жаропонижающего и отхаркивающего средства при простуде, гриппе, бронхите, ларингите и пневмонии. Парение с мать-и-мачехой повышает сопротивляемость организма различным заболеваниям.",
                "<b>Ромашка аптечная</b></br></br>Пар, образующийся при выливании на камни настоя ромашки, применяют как противовоспалительное средство при гриппе и простуде. Он помогает при насморке и кашле, а также положительно влияет на состояние кожи.",
                "<b>Душица</b></br></br>Аромат душицы благотворно воздействует на нервную систему и успешно борется с заболеваниями верхних дыхательных путей. Такой пар полезен при бронхите, ларингите и других болезнях, сопровождающихся кашлем.",
                "<b>Земляника лесная</b></br></br>Аромат листьев земляники лесной считается универсальным средством от всех болезней. Пар, образующийся при выливании настоя земляники на раскаленные камни, повышает иммунитет, улучшает кровообращение и способствует профилактике целого ряда заболеваний, в том числе и сердечно-сосудистых.",
                "<b>Календула</b></br></br> Пар от настоя календулы помогает бороться с простудой и гриппом. Кроме того, он оказывает благотворное воздействие на кожу, снимает мышечную боль и отеки."
        ];

        function citation(){
                document.getElementById('citat').innerHTML = cit[Math.round((Math.random() * (cit.length - 1) + 0))];
        }
        setInterval(citation, 8000);
}