function ChangeFont(text)
{
document.getElementById("PAR").style.fontFamily=text;
}
function ChangeBorderColor(text)
{
document.getElementById("PAR").style.borderColor=text;
}
function ChangeAlign(txt)
{
document.getElementById("PAR").style.textAlign=txt;
}
function ChangeLSpace(txt)
{
document.getElementById("PAR").style.letterSpacing=txt;
}
function ChangeIndent(txt)
{
document.getElementById("PAR").style.textIndent=txt;
}
function ChangeTransform(txt)
{
document.getElementById("PAR").style.textTransform=txt;
}
function ChangeDecorate(txt)
{
document.getElementById("PAR").style.textDecoration=txt;
}
function ChangeBorder(txt)
{
document.getElementById("PAR").style.borderStyle=txt;
}
function ChangeHeight(txt)
{
    if(txt=='1.5')
    {
        txt='1.5ex';
    }
    if(txt=='normal')
    {
        txt='11pt';
    }
document.getElementById("PAR").style.fontSize=txt;
}