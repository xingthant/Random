const result = document.getElementById('result');
const filter = document.getElementById('filter');
const listItem = [];
const total = document.getElementById('total');

window.onload = getData();

function getData() {
    const resultView = [
        {
            "PhoneNumber": "+95-979-555-43"    },
        {
            "PhoneNumber": "+95-996-555-8317"    },
        {
            "PhoneNumber": "+95-944-555-3856"    },
        {
            "PhoneNumber": "+95-965-555-63"    },
        {
            "PhoneNumber": "+95-997-555-542"    },
        {
            "PhoneNumber": "+95-991-555-77"    },
        {
            "PhoneNumber": "+95-979-555-6683"    },
        {
            "PhoneNumber": "+95-943-555-93"    },
        {
            "PhoneNumber": "+95-925-557-75"    },
        {
            "PhoneNumber": "+95-973-555-344"    },
        {
            "PhoneNumber": "+95-991-555-4127"    },
        {
            "PhoneNumber": "+95-991-555-97"    },
        {
            "PhoneNumber": "+95-991-555-1176"    },
        {
            "PhoneNumber": "+95-926-555-532"    },
        {
            "PhoneNumber": "+95-977-555-223"    },
        {
            "PhoneNumber": "+95-955-557-0419"    },
        {
            "PhoneNumber": "+95-955-552-51"    },
        {
            "PhoneNumber": "+95-944-555-4835"    },
        {
            "PhoneNumber": "+95-965-552-35"    },
        {
            "PhoneNumber": "+95-926-555-811"    },
        {
            "PhoneNumber": "+95-925-559-7605"    },
        {
            "PhoneNumber": "+95-925-557-6231"    },
        {
            "PhoneNumber": "+95-991-555-673"    },
        {
            "PhoneNumber": "+95-997-555-936"    },
        {
            "PhoneNumber": "+95-973-555-01"    },
        {
            "PhoneNumber": "+95-965-552-7068"    },
        {
            "PhoneNumber": "+95-991-555-1258"    },
        {
            "PhoneNumber": "+95-997-555-88"    },
        {
            "PhoneNumber": "+95-991-555-441"    },
        {
            "PhoneNumber": "+95-991-555-89"    },
        {
            "PhoneNumber": "+95-996-555-78"    },
        {
            "PhoneNumber": "+95-973-555-3396"    },
        {
            "PhoneNumber": "+95-925-558-40"    },
        {
            "PhoneNumber": "+95-979-555-7082"    },
        {
            "PhoneNumber": "+95-925-555-448"    },
        {
            "PhoneNumber": "+95-991-555-935"    },
        {
            "PhoneNumber": "+95-973-555-59"    },
        {
            "PhoneNumber": "+95-979-555-165"    },
        {
            "PhoneNumber": "+95-926-555-33"    },
        {
            "PhoneNumber": "+95-991-555-22"    },
        {
            "PhoneNumber": "+95-925-553-70"    },
        {
            "PhoneNumber": "+95-943-555-4411"    },
        {
            "PhoneNumber": "+95-973-555-654"    },
        {
            "PhoneNumber": "+95-943-555-4857"    },
        {
            "PhoneNumber": "+95-973-555-7834"    },
        {
            "PhoneNumber": "+95-925-555-13"    },
        {
            "PhoneNumber": "+95-944-555-68"    },
        {
            "PhoneNumber": "+95-979-555-67"    },
        {
            "PhoneNumber": "+95-973-555-175"    },
        {
            "PhoneNumber": "+95-996-555-6156"    },
        {
            "PhoneNumber": "+95-991-555-147"    },
        {
            "PhoneNumber": "+95-996-555-1345"    },
        {
            "PhoneNumber": "+95-955-556-02"    },
        {
            "PhoneNumber": "+95-955-558-85"    },
        {
            "PhoneNumber": "+95-955-557-593"    },
        {
            "PhoneNumber": "+95-944-555-3206"    },
        {
            "PhoneNumber": "+95-926-555-1060"    },
        {
            "PhoneNumber": "+95-996-555-200"    },
        {
            "PhoneNumber": "+95-991-555-158"    },
        {
            "PhoneNumber": "+95-996-555-768"    },
        {
            "PhoneNumber": "+95-997-555-098"    },
        {
            "PhoneNumber": "+95-943-555-3657"    },
        {
            "PhoneNumber": "+95-991-555-42"    },
        {
            "PhoneNumber": "+95-943-555-1949"    },
        {
            "PhoneNumber": "+95-996-555-841"    },
        {
            "PhoneNumber": "+95-925-555-592"    },
        {
            "PhoneNumber": "+95-944-555-322"    },
        {
            "PhoneNumber": "+95-997-555-54"    },
        {
            "PhoneNumber": "+95-944-555-00"    },
        {
            "PhoneNumber": "+95-925-559-59"    },
        {
            "PhoneNumber": "+95-955-558-53"    },
        {
            "PhoneNumber": "+95-925-557-5666"    },
        {
            "PhoneNumber": "+95-926-555-230"    },
        {
            "PhoneNumber": "+95-973-555-7795"    },
        {
            "PhoneNumber": "+95-973-555-443"    },
        {
            "PhoneNumber": "+95-996-555-54"    },
        {
            "PhoneNumber": "+95-997-555-1634"    },
        {
            "PhoneNumber": "+95-991-555-9019"    },
        {
            "PhoneNumber": "+95-978-555-630"    },
        {
            "PhoneNumber": "+95-996-555-9035"    },
        {
            "PhoneNumber": "+95-944-555-35"    },
        {
            "PhoneNumber": "+95-991-555-7378"    },
        {
            "PhoneNumber": "+95-973-555-63"    },
        {
            "PhoneNumber": "+95-997-555-61"    },
        {
            "PhoneNumber": "+95-944-555-419"    },
        {
            "PhoneNumber": "+95-955-556-16"    },
        {
            "PhoneNumber": "+95-996-555-01"    },
        {
            "PhoneNumber": "+95-944-555-677"    },
        {
            "PhoneNumber": "+95-997-555-471"    },
        {
            "PhoneNumber": "+95-977-555-97"    },
        {
            "PhoneNumber": "+95-944-555-08"    },
        {
            "PhoneNumber": "+95-925-551-42"    },
        {
            "PhoneNumber": "+95-973-555-817"    },
        {
            "PhoneNumber": "+95-996-555-6595"    },
        {
            "PhoneNumber": "+95-979-555-443"    },
        {
            "PhoneNumber": "+95-955-556-97"    },
        {
            "PhoneNumber": "+95-925-558-107"    },
        {
            "PhoneNumber": "+95-996-555-73"    },
        {
            "PhoneNumber": "+95-973-555-186"    },
        {
            "PhoneNumber": "+95-925-554-99"    },
        {
            "PhoneNumber": "+95-926-555-78"    },
        {
            "PhoneNumber": "+95-943-555-854"    },
        {
            "PhoneNumber": "+95-925-551-0936"    },
        {
            "PhoneNumber": "+95-965-550-40"    },
        {
            "PhoneNumber": "+95-997-555-890"    },
        {
            "PhoneNumber": "+95-925-552-0177"    },
        {
            "PhoneNumber": "+95-926-555-3384"    },
        {
            "PhoneNumber": "+95-955-553-00"    },
        {
            "PhoneNumber": "+95-978-555-843"    },
        {
            "PhoneNumber": "+95-991-555-1875"    },
        {
            "PhoneNumber": "+95-997-555-38"    },
        {
            "PhoneNumber": "+95-997-555-1640"    },
        {
            "PhoneNumber": "+95-991-555-185"    },
        {
            "PhoneNumber": "+95-925-555-7077"    },
        {
            "PhoneNumber": "+95-944-555-6727"    },
        {
            "PhoneNumber": "+95-925-555-13"    },
        {
            "PhoneNumber": "+95-944-555-586"    },
        {
            "PhoneNumber": "+95-991-555-314"    },
        {
            "PhoneNumber": "+95-944-555-39"    },
        {
            "PhoneNumber": "+95-997-555-679"    },
        {
            "PhoneNumber": "+95-996-555-2394"    },
        {
            "PhoneNumber": "+95-955-558-20"    },
        {
            "PhoneNumber": "+95-943-555-4051"    },
        {
            "PhoneNumber": "+95-991-555-2337"    },
        {
            "PhoneNumber": "+95-925-555-164"    },
        {
            "PhoneNumber": "+95-944-555-179"    },
        {
            "PhoneNumber": "+95-996-555-2548"    },
        {
            "PhoneNumber": "+95-997-555-3728"    },
        {
            "PhoneNumber": "+95-991-555-38"    },
        {
            "PhoneNumber": "+95-977-555-60"    },
        {
            "PhoneNumber": "+95-944-555-21"    },
        {
            "PhoneNumber": "+95-926-555-5729"    },
        {
            "PhoneNumber": "+95-997-555-46"    },
        {
            "PhoneNumber": "+95-997-555-1656"    },
        {
            "PhoneNumber": "+95-991-555-28"    },
        {
            "PhoneNumber": "+95-978-555-82"    },
        {
            "PhoneNumber": "+95-955-556-271"    },
        {
            "PhoneNumber": "+95-926-555-6010"    },
        {
            "PhoneNumber": "+95-925-555-51"    },
        {
            "PhoneNumber": "+95-925-555-46"    },
        {
            "PhoneNumber": "+95-997-555-3350"    },
        {
            "PhoneNumber": "+95-979-555-02"    },
        {
            "PhoneNumber": "+95-925-550-5891"    },
        {
            "PhoneNumber": "+95-925-555-1762"    },
        {
            "PhoneNumber": "+95-926-555-6010"    },
        {
            "PhoneNumber": "+95-991-555-543"    },
        {
            "PhoneNumber": "+95-973-555-746"    },
        {
            "PhoneNumber": "+95-955-557-14"    },
        {
            "PhoneNumber": "+95-997-555-787"    },
        {
            "PhoneNumber": "+95-997-555-15"    },
        {
            "PhoneNumber": "+95-978-555-186"    },
        {
            "PhoneNumber": "+95-991-555-64"    },
        {
            "PhoneNumber": "+95-997-555-127"    },
        {
            "PhoneNumber": "+95-997-555-76"    },
        {
            "PhoneNumber": "+95-973-555-8674"    },
        {
            "PhoneNumber": "+95-991-555-0135"    },
        {
            "PhoneNumber": "+95-925-553-861"    },
        {
            "PhoneNumber": "+95-997-555-27"    },
        {
            "PhoneNumber": "+95-973-555-94"    },
        {
            "PhoneNumber": "+95-955-558-37"    },
        {
            "PhoneNumber": "+95-944-555-203"    },
        {
            "PhoneNumber": "+95-955-551-836"    },
        {
            "PhoneNumber": "+95-925-555-908"    },
        {
            "PhoneNumber": "+95-997-555-41"    },
        {
            "PhoneNumber": "+95-955-553-021"    },
        {
            "PhoneNumber": "+95-973-555-6043"    },
        {
            "PhoneNumber": "+95-991-555-98"    },
        {
            "PhoneNumber": "+95-955-558-493"    },
        {
            "PhoneNumber": "+95-997-555-8715"    },
        {
            "PhoneNumber": "+95-991-555-007"    },
        {
            "PhoneNumber": "+95-997-555-3516"    },
        {
            "PhoneNumber": "+95-926-555-17"    },
        {
            "PhoneNumber": "+95-965-559-545"    },
        {
            "PhoneNumber": "+95-979-555-1855"    },
        {
            "PhoneNumber": "+95-991-555-67"    },
        {
            "PhoneNumber": "+95-925-555-2121"    },
        {
            "PhoneNumber": "+95-991-555-4169"    },
        {
            "PhoneNumber": "+95-925-556-89"    },
        {
            "PhoneNumber": "+95-973-555-345"    },
        {
            "PhoneNumber": "+95-997-555-39"    },
        {
            "PhoneNumber": "+95-996-555-112"    },
        {
            "PhoneNumber": "+95-997-555-55"    },
        {
            "PhoneNumber": "+95-925-558-22"    },
        {
            "PhoneNumber": "+95-955-550-98"    },
        {
            "PhoneNumber": "+95-925-559-7664"    },
        {
            "PhoneNumber": "+95-965-557-604"    },
        {
            "PhoneNumber": "+95-973-555-103"    },
        {
            "PhoneNumber": "+95-997-555-7996"    },
        {
            "PhoneNumber": "+95-965-552-620"    },
        {
            "PhoneNumber": "+95-991-555-413"    },
        {
            "PhoneNumber": "+95-926-555-43"    },
        {
            "PhoneNumber": "+95-925-559-22"    },
        {
            "PhoneNumber": "+95-925-556-6561"    },
        {
            "PhoneNumber": "+95-925-555-976"    },
        {
            "PhoneNumber": "+95-977-555-270"    },
        {
            "PhoneNumber": "+95-943-555-8746"    },
        {
            "PhoneNumber": "+95-944-555-809"    },
        {
            "PhoneNumber": "+95-991-555-62"    },
        {
            "PhoneNumber": "+95-943-555-924"    },
        {
            "PhoneNumber": "+95-925-555-13"    },
        {
            "PhoneNumber": "+95-991-555-6289"    },
        {
            "PhoneNumber": "+95-943-555-984"    },
        {
            "PhoneNumber": "+95-997-555-09"    },
        {
            "PhoneNumber": "+95-996-555-6114"    },
        {
            "PhoneNumber": "+95-996-555-0144"    },
        {
            "PhoneNumber": "+95-979-555-821"    },
        {
            "PhoneNumber": "+95-943-555-427"    },
        {
            "PhoneNumber": "+95-991-555-45"    },
        {
            "PhoneNumber": "+95-991-555-591"    },
        {
            "PhoneNumber": "+95-991-555-0925"    },
        {
            "PhoneNumber": "+95-955-550-7067"    },
        {
            "PhoneNumber": "+95-943-555-8423"    },
        {
            "PhoneNumber": "+95-925-555-4636"    },
        {
            "PhoneNumber": "+95-965-556-963"    },
        {
            "PhoneNumber": "+95-973-555-99"    },
        {
            "PhoneNumber": "+95-996-555-837"    },
        {
            "PhoneNumber": "+95-965-555-534"    },
        {
            "PhoneNumber": "+95-977-555-6141"    },
        {
            "PhoneNumber": "+95-955-550-3553"    },
        {
            "PhoneNumber": "+95-991-555-088"    },
        {
            "PhoneNumber": "+95-926-555-265"    },
        {
            "PhoneNumber": "+95-926-555-76"    },
        {
            "PhoneNumber": "+95-991-555-42"    },
        {
            "PhoneNumber": "+95-991-555-80"    },
        {
            "PhoneNumber": "+95-965-555-6436"    },
        {
            "PhoneNumber": "+95-991-555-71"    },
        {
            "PhoneNumber": "+95-955-555-51"    },
        {
            "PhoneNumber": "+95-991-555-96"    },
        {
            "PhoneNumber": "+95-996-555-7329"    },
        {
            "PhoneNumber": "+95-991-555-511"    },
        {
            "PhoneNumber": "+95-991-555-701"    },
        {
            "PhoneNumber": "+95-996-555-83"    },
        {
            "PhoneNumber": "+95-943-555-48"    },
        {
            "PhoneNumber": "+95-925-559-8939"    },
        {
            "PhoneNumber": "+95-973-555-5817"    },
        {
            "PhoneNumber": "+95-991-555-02"    },
        {
            "PhoneNumber": "+95-943-555-4497"    },
        {
            "PhoneNumber": "+95-944-555-99"    },
        {
            "PhoneNumber": "+95-955-557-9116"    },
        {
            "PhoneNumber": "+95-996-555-0904"    },
        {
            "PhoneNumber": "+95-991-555-04"    },
        {
            "PhoneNumber": "+95-943-555-5823"    },
        {
            "PhoneNumber": "+95-925-555-85"    },
        {
            "PhoneNumber": "+95-925-559-166"    },
        {
            "PhoneNumber": "+95-925-553-41"    },
        {
            "PhoneNumber": "+95-955-551-13"    },
        {
            "PhoneNumber": "+95-997-555-56"    },
        {
            "PhoneNumber": "+95-973-555-48"    },
        {
            "PhoneNumber": "+95-991-555-6452"    },
        {
            "PhoneNumber": "+95-943-555-534"    },
        {
            "PhoneNumber": "+95-926-555-504"    },
        {
            "PhoneNumber": "+95-996-555-522"    },
        {
            "PhoneNumber": "+95-991-555-1380"    },
        {
            "PhoneNumber": "+95-944-555-38"    },
        {
            "PhoneNumber": "+95-943-555-564"    },
        {
            "PhoneNumber": "+95-973-555-22"    },
        {
            "PhoneNumber": "+95-965-555-636"    },
        {
            "PhoneNumber": "+95-965-551-5280"    },
        {
            "PhoneNumber": "+95-943-555-135"    },
        {
            "PhoneNumber": "+95-978-555-8728"    },
        {
            "PhoneNumber": "+95-955-552-79"    },
        {
            "PhoneNumber": "+95-979-555-56"    },
        {
            "PhoneNumber": "+95-944-555-464"    },
        {
            "PhoneNumber": "+95-965-554-54"    },
        {
            "PhoneNumber": "+95-991-555-290"    },
        {
            "PhoneNumber": "+95-943-555-9208"    },
        {
            "PhoneNumber": "+95-991-555-974"    },
        {
            "PhoneNumber": "+95-925-555-320"    },
        {
            "PhoneNumber": "+95-991-555-2299"    },
        {
            "PhoneNumber": "+95-943-555-713"    },
        {
            "PhoneNumber": "+95-944-555-4557"    },
        {
            "PhoneNumber": "+95-991-555-733"    },
        {
            "PhoneNumber": "+95-973-555-819"    },
        {
            "PhoneNumber": "+95-991-555-93"    },
        {
            "PhoneNumber": "+95-955-559-89"    },
        {
            "PhoneNumber": "+95-926-555-38"    },
        {
            "PhoneNumber": "+95-925-555-62"    },
        {
            "PhoneNumber": "+95-926-555-6947"    },
        {
            "PhoneNumber": "+95-926-555-909"    },
        {
            "PhoneNumber": "+95-979-555-062"    },
        {
            "PhoneNumber": "+95-997-555-57"    },
        {
            "PhoneNumber": "+95-955-559-515"    },
        {
            "PhoneNumber": "+95-955-551-6273"    },
        {
            "PhoneNumber": "+95-955-557-59"    },
        {
            "PhoneNumber": "+95-991-555-29"    },
        {
            "PhoneNumber": "+95-973-555-40"    },
        {
            "PhoneNumber": "+95-944-555-7043"    },
        {
            "PhoneNumber": "+95-965-552-280"    },
        {
            "PhoneNumber": "+95-925-555-22"    },
        {
            "PhoneNumber": "+95-973-555-95"    },
        {
            "PhoneNumber": "+95-925-554-985"    },
        {
            "PhoneNumber": "+95-955-554-90"    },
        {
            "PhoneNumber": "+95-997-555-55"    },
        {
            "PhoneNumber": "+95-991-555-7841"    },
        {
            "PhoneNumber": "+95-955-559-69"    },
        {
            "PhoneNumber": "+95-925-555-919"    },
        {
            "PhoneNumber": "+95-973-555-17"    },
        {
            "PhoneNumber": "+95-955-555-513"    },
        {
            "PhoneNumber": "+95-943-555-556"    },
        {
            "PhoneNumber": "+95-991-555-334"    },
        {
            "PhoneNumber": "+95-925-555-2803"    },
        {
            "PhoneNumber": "+95-973-555-702"    },
        {
            "PhoneNumber": "+95-991-555-11"    },
        {
            "PhoneNumber": "+95-925-555-75"    },
        {
            "PhoneNumber": "+95-944-555-129"    },
        {
            "PhoneNumber": "+95-944-555-520"    },
        {
            "PhoneNumber": "+95-991-555-3723"    },
        {
            "PhoneNumber": "+95-965-553-5966"    },
        {
            "PhoneNumber": "+95-997-555-64"    },
        {
            "PhoneNumber": "+95-997-555-5205"    },
        {
            "PhoneNumber": "+95-996-555-40"    },
        {
            "PhoneNumber": "+95-944-555-72"    },
        {
            "PhoneNumber": "+95-991-555-003"    },
        {
            "PhoneNumber": "+95-944-555-166"    },
        {
            "PhoneNumber": "+95-925-555-013"    },
        {
            "PhoneNumber": "+95-996-555-34"    },
        {
            "PhoneNumber": "+95-996-555-0532"    },
        {
            "PhoneNumber": "+95-925-555-6317"    },
        {
            "PhoneNumber": "+95-955-553-52"    },
        {
            "PhoneNumber": "+95-997-555-85"    },
        {
            "PhoneNumber": "+95-965-552-51"    },
        {
            "PhoneNumber": "+95-955-557-074"    },
        {
            "PhoneNumber": "+95-997-555-110"    },
        {
            "PhoneNumber": "+95-944-555-527"    },
        {
            "PhoneNumber": "+95-944-555-0508"    },
        {
            "PhoneNumber": "+95-991-555-83"    },
        {
            "PhoneNumber": "+95-973-555-813"    },
        {
            "PhoneNumber": "+95-973-555-094"    },
        {
            "PhoneNumber": "+95-965-551-302"    },
        {
            "PhoneNumber": "+95-991-555-748"    },
        {
            "PhoneNumber": "+95-973-555-296"    },
        {
            "PhoneNumber": "+95-997-555-7287"    },
        {
            "PhoneNumber": "+95-997-555-23"    },
        {
            "PhoneNumber": "+95-925-555-0697"    },
        {
            "PhoneNumber": "+95-944-555-3712"    },
        {
            "PhoneNumber": "+95-965-553-878"    },
        {
            "PhoneNumber": "+95-925-555-2267"    },
        {
            "PhoneNumber": "+95-973-555-60"    },
        {
            "PhoneNumber": "+95-944-555-8183"    },
        {
            "PhoneNumber": "+95-925-553-31"    },
        {
            "PhoneNumber": "+95-991-555-525"    },
        {
            "PhoneNumber": "+95-997-555-5333"    },
        {
            "PhoneNumber": "+95-991-555-88"    },
        {
            "PhoneNumber": "+95-925-550-9866"    },
        {
            "PhoneNumber": "+95-925-556-0492"    },
        {
            "PhoneNumber": "+95-926-555-67"    },
        {
            "PhoneNumber": "+95-978-555-51"    },
        {
            "PhoneNumber": "+95-944-555-25"    },
        {
            "PhoneNumber": "+95-925-555-2794"    },
        {
            "PhoneNumber": "+95-925-555-3455"    },
        {
            "PhoneNumber": "+95-943-555-51"    },
        {
            "PhoneNumber": "+95-925-553-12"    },
        {
            "PhoneNumber": "+95-965-559-21"    },
        {
            "PhoneNumber": "+95-991-555-71"    },
        {
            "PhoneNumber": "+95-973-555-13"    },
        {
            "PhoneNumber": "+95-973-555-84"    },
        {
            "PhoneNumber": "+95-943-555-75"    },
        {
            "PhoneNumber": "+95-991-555-6388"    },
        {
            "PhoneNumber": "+95-997-555-307"    },
        {
            "PhoneNumber": "+95-926-555-86"    },
        {
            "PhoneNumber": "+95-944-555-715"    },
        {
            "PhoneNumber": "+95-926-555-428"    },
        {
            "PhoneNumber": "+95-965-556-0329"    },
        {
            "PhoneNumber": "+95-997-555-24"    },
        {
            "PhoneNumber": "+95-965-554-48"    },
        {
            "PhoneNumber": "+95-996-555-32"    },
        {
            "PhoneNumber": "+95-996-555-481"    },
        {
            "PhoneNumber": "+95-997-555-644"    },
        {
            "PhoneNumber": "+95-926-555-665"    },
        {
            "PhoneNumber": "+95-996-555-54"    },
        {
            "PhoneNumber": "+95-925-556-21"    },
        {
            "PhoneNumber": "+95-943-555-8120"    },
        {
            "PhoneNumber": "+95-973-555-0844"    },
        {
            "PhoneNumber": "+95-991-555-045"    },
        {
            "PhoneNumber": "+95-991-555-48"    },
        {
            "PhoneNumber": "+95-991-555-233"    },
        {
            "PhoneNumber": "+95-978-555-1163"    },
        {
            "PhoneNumber": "+95-991-555-8325"    },
        {
            "PhoneNumber": "+95-955-550-410"    },
        {
            "PhoneNumber": "+95-991-555-950"    },
        {
            "PhoneNumber": "+95-944-555-203"    },
        {
            "PhoneNumber": "+95-943-555-274"    },
        {
            "PhoneNumber": "+95-973-555-7264"    },
        {
            "PhoneNumber": "+95-944-555-10"    },
        {
            "PhoneNumber": "+95-944-555-0607"    },
        {
            "PhoneNumber": "+95-925-555-0974"    },
        {
            "PhoneNumber": "+95-926-555-73"    },
        {
            "PhoneNumber": "+95-943-555-84"    },
        {
            "PhoneNumber": "+95-991-555-2476"    },
        {
            "PhoneNumber": "+95-943-555-92"    },
        {
            "PhoneNumber": "+95-955-554-7295"    },
        {
            "PhoneNumber": "+95-996-555-605"    },
        {
            "PhoneNumber": "+95-925-555-3015"    },
        {
            "PhoneNumber": "+95-973-555-94"    },
        {
            "PhoneNumber": "+95-965-558-8290"    },
        {
            "PhoneNumber": "+95-955-554-86"    },
        {
            "PhoneNumber": "+95-991-555-91"    },
        {
            "PhoneNumber": "+95-925-555-1747"    },
        {
            "PhoneNumber": "+95-991-555-964"    },
        {
            "PhoneNumber": "+95-978-555-5787"    },
        {
            "PhoneNumber": "+95-997-555-34"    },
        {
            "PhoneNumber": "+95-991-555-0441"    },
        {
            "PhoneNumber": "+95-996-555-9304"    },
        {
            "PhoneNumber": "+95-965-551-046"    },
        {
            "PhoneNumber": "+95-973-555-937"    },
        {
            "PhoneNumber": "+95-979-555-414"    },
        {
            "PhoneNumber": "+95-991-555-84"    },
        {
            "PhoneNumber": "+95-973-555-417"    },
        {
            "PhoneNumber": "+95-943-555-753"    },
        {
            "PhoneNumber": "+95-925-555-7572"    },
        {
            "PhoneNumber": "+95-925-555-1393"    },
        {
            "PhoneNumber": "+95-965-558-254"    },
        {
            "PhoneNumber": "+95-944-555-646"    },
        {
            "PhoneNumber": "+95-955-558-640"    },
        {
            "PhoneNumber": "+95-943-555-62"    },
        {
            "PhoneNumber": "+95-925-555-64"    },
        {
            "PhoneNumber": "+95-991-555-23"    },
        {
            "PhoneNumber": "+95-991-555-7932"    },
        {
            "PhoneNumber": "+95-926-555-09"    },
        {
            "PhoneNumber": "+95-943-555-3408"    },
        {
            "PhoneNumber": "+95-991-555-2881"    },
        {
            "PhoneNumber": "+95-978-555-4190"    },
        {
            "PhoneNumber": "+95-978-555-8799"    },
        {
            "PhoneNumber": "+95-996-555-8346"    },
        {
            "PhoneNumber": "+95-926-555-3949"    },
        {
            "PhoneNumber": "+95-955-551-88"    },
        {
            "PhoneNumber": "+95-943-555-8436"    },
        {
            "PhoneNumber": "+95-997-555-1963"    },
        {
            "PhoneNumber": "+95-991-555-293"    },
        {
            "PhoneNumber": "+95-925-555-157"    },
        {
            "PhoneNumber": "+95-925-555-68"    },
        {
            "PhoneNumber": "+95-925-555-79"    },
        {
            "PhoneNumber": "+95-944-555-542"    },
        {
            "PhoneNumber": "+95-943-555-655"    },
        {
            "PhoneNumber": "+95-955-556-847"    },
        {
            "PhoneNumber": "+95-965-556-78"    },
        {
            "PhoneNumber": "+95-944-555-49"    },
        {
            "PhoneNumber": "+95-996-555-191"    },
        {
            "PhoneNumber": "+95-991-555-113"    },
        {
            "PhoneNumber": "+95-978-555-6426"    },
        {
            "PhoneNumber": "+95-991-555-294"    },
        {
            "PhoneNumber": "+95-991-555-682"    },
        {
            "PhoneNumber": "+95-926-555-209"    },
        {
            "PhoneNumber": "+95-973-555-606"    },
        {
            "PhoneNumber": "+95-943-555-8488"    },
        {
            "PhoneNumber": "+95-997-555-037"    },
        {
            "PhoneNumber": "+95-991-555-9465"    },
        {
            "PhoneNumber": "+95-977-555-3132"    },
        {
            "PhoneNumber": "+95-955-557-820"    },
        {
            "PhoneNumber": "+95-997-555-00"    },
        {
            "PhoneNumber": "+95-955-553-2632"    },
        {
            "PhoneNumber": "+95-997-555-3409"    },
        {
            "PhoneNumber": "+95-991-555-4458"    },
        {
            "PhoneNumber": "+95-943-555-1532"    },
        {
            "PhoneNumber": "+95-977-555-009"    },
        {
            "PhoneNumber": "+95-965-550-78"    },
        {
            "PhoneNumber": "+95-973-555-936"    },
        {
            "PhoneNumber": "+95-926-555-6862"    },
        {
            "PhoneNumber": "+95-925-552-03"    },
        {
            "PhoneNumber": "+95-991-555-619"    },
        {
            "PhoneNumber": "+95-991-555-64"    },
        {
            "PhoneNumber": "+95-925-553-6095"    },
        {
            "PhoneNumber": "+95-977-555-4813"    },
        {
            "PhoneNumber": "+95-991-555-67"    },
        {
            "PhoneNumber": "+95-955-552-918"    },
        {
            "PhoneNumber": "+95-991-555-630"    },
        {
            "PhoneNumber": "+95-977-555-854"    },
        {
            "PhoneNumber": "+95-926-555-4341"    },
        {
            "PhoneNumber": "+95-991-555-285"    },
        {
            "PhoneNumber": "+95-996-555-4397"    },
        {
            "PhoneNumber": "+95-991-555-6984"    },
        {
            "PhoneNumber": "+95-943-555-792"    },
        {
            "PhoneNumber": "+95-991-555-991"    },
        {
            "PhoneNumber": "+95-943-555-5681"    },
        {
            "PhoneNumber": "+95-991-555-93"    },
        {
            "PhoneNumber": "+95-926-555-65"    },
        {
            "PhoneNumber": "+95-973-555-32"    },
        {
            "PhoneNumber": "+95-965-557-5322"    },
        {
            "PhoneNumber": "+95-955-557-9381"    },
        {
            "PhoneNumber": "+95-979-555-099"    },
        {
            "PhoneNumber": "+95-955-551-41"    },
        {
            "PhoneNumber": "+95-991-555-04"    },
        {
            "PhoneNumber": "+95-925-555-3502"    },
        {
            "PhoneNumber": "+95-965-550-27"    },
        {
            "PhoneNumber": "+95-926-555-33"    },
        {
            "PhoneNumber": "+95-955-550-1670"    },
        {
            "PhoneNumber": "+95-926-555-1493"    },
        {
            "PhoneNumber": "+95-926-555-3440"    },
        {
            "PhoneNumber": "+95-996-555-6715"    },
        {
            "PhoneNumber": "+95-997-555-84"    },
        {
            "PhoneNumber": "+95-925-555-1824"    },
        {
            "PhoneNumber": "+95-979-555-253"    },
        {
            "PhoneNumber": "+95-991-555-7797"    },
        {
            "PhoneNumber": "+95-997-555-59"    },
        {
            "PhoneNumber": "+95-943-555-85"    },
        {
            "PhoneNumber": "+95-979-555-71"    },
        {
            "PhoneNumber": "+95-991-555-8271"    },
        {
            "PhoneNumber": "+95-977-555-6767"    },
        {
            "PhoneNumber": "+95-977-555-06"    },
        {
            "PhoneNumber": "+95-977-555-6175"    },
        {
            "PhoneNumber": "+95-997-555-006"    },
        {
            "PhoneNumber": "+95-926-555-54"    },
        {
            "PhoneNumber": "+95-925-555-267"    },
        {
            "PhoneNumber": "+95-973-555-2850"    },
        {
            "PhoneNumber": "+95-991-555-4818"    },
        {
            "PhoneNumber": "+95-926-555-09"    },
        {
            "PhoneNumber": "+95-977-555-07"    },
        {
            "PhoneNumber": "+95-996-555-487"    },
        {
            "PhoneNumber": "+95-991-555-2897"    },
        {
            "PhoneNumber": "+95-965-556-9509"    },
        {
            "PhoneNumber": "+95-925-553-3976"    },
        {
            "PhoneNumber": "+95-943-555-57"    },
        {
            "PhoneNumber": "+95-955-553-12"    },
        {
            "PhoneNumber": "+95-965-551-506"    },
        {
            "PhoneNumber": "+95-996-555-7095"    },
        {
            "PhoneNumber": "+95-965-550-9775"    },
        {
            "PhoneNumber": "+95-991-555-5785"    },
        {
            "PhoneNumber": "+95-943-555-245"    },
        {
            "PhoneNumber": "+95-926-555-9994"    },
        {
            "PhoneNumber": "+95-991-555-3634"    },
        {
            "PhoneNumber": "+95-944-555-57"    },
        {
            "PhoneNumber": "+95-991-555-35"    },
        {
            "PhoneNumber": "+95-926-555-224"    },
        {
            "PhoneNumber": "+95-973-555-0454"    },
        {
            "PhoneNumber": "+95-991-555-951"    },
        {
            "PhoneNumber": "+95-997-555-575"    },
        {
            "PhoneNumber": "+95-991-555-3538"    },
        {
            "PhoneNumber": "+95-955-551-48"    },
        {
            "PhoneNumber": "+95-926-555-213"    },
        {
            "PhoneNumber": "+95-925-556-0851"    },
        {
            "PhoneNumber": "+95-965-558-747"    },
        {
            "PhoneNumber": "+95-996-555-98"    },
        {
            "PhoneNumber": "+95-991-555-476"    },
        {
            "PhoneNumber": "+95-991-555-8889"    },
        {
            "PhoneNumber": "+95-991-555-816"    },
        {
            "PhoneNumber": "+95-991-555-1152"    },
        {
            "PhoneNumber": "+95-955-558-89"    },
        {
            "PhoneNumber": "+95-996-555-31"    },
        {
            "PhoneNumber": "+95-996-555-5460"    },
        {
            "PhoneNumber": "+95-955-550-455"    },
        {
            "PhoneNumber": "+95-991-555-8208"    },
        {
            "PhoneNumber": "+95-997-555-8892"    },
        {
            "PhoneNumber": "+95-925-555-1599"    },
        {
            "PhoneNumber": "+95-965-550-79"    },
        {
            "PhoneNumber": "+95-996-555-77"    },
        {
            "PhoneNumber": "+95-955-553-314"    },
        {
            "PhoneNumber": "+95-965-550-962"    },
        {
            "PhoneNumber": "+95-925-557-4785"    },
        {
            "PhoneNumber": "+95-965-554-16"    },
        {
            "PhoneNumber": "+95-943-555-9414"    },
        {
            "PhoneNumber": "+95-925-556-91"    },
        {
            "PhoneNumber": "+95-926-555-245"    },
        {
            "PhoneNumber": "+95-997-555-10"    },
        {
            "PhoneNumber": "+95-925-555-780"    },
        {
            "PhoneNumber": "+95-925-555-854"    },
        {
            "PhoneNumber": "+95-955-553-17"    },
        {
            "PhoneNumber": "+95-925-553-107"    },
        {
            "PhoneNumber": "+95-926-555-0969"    },
        {
            "PhoneNumber": "+95-973-555-1210"    },
        {
            "PhoneNumber": "+95-944-555-605"    },
        {
            "PhoneNumber": "+95-926-555-76"    },
        {
            "PhoneNumber": "+95-925-555-15"    },
        {
            "PhoneNumber": "+95-943-555-09"    },
        {
            "PhoneNumber": "+95-943-555-849"    },
        {
            "PhoneNumber": "+95-996-555-52"    },
        {
            "PhoneNumber": "+95-973-555-366"    },
        {
            "PhoneNumber": "+95-944-555-69"    },
        {
            "PhoneNumber": "+95-991-555-43"    },
        {
            "PhoneNumber": "+95-965-557-2325"    },
        {
            "PhoneNumber": "+95-979-555-331"    },
        {
            "PhoneNumber": "+95-965-559-6145"    },
        {
            "PhoneNumber": "+95-965-550-3854"    },
        {
            "PhoneNumber": "+95-943-555-432"    },
        {
            "PhoneNumber": "+95-965-551-909"    },
        {
            "PhoneNumber": "+95-997-555-0612"    },
        {
            "PhoneNumber": "+95-925-559-986"    },
        {
            "PhoneNumber": "+95-944-555-8507"    },
        {
            "PhoneNumber": "+95-979-555-164"    },
        {
            "PhoneNumber": "+95-991-555-6129"    },
        {
            "PhoneNumber": "+95-925-555-3420"    },
        {
            "PhoneNumber": "+95-997-555-1585"    },
        {
            "PhoneNumber": "+95-925-551-7998"    },
        {
            "PhoneNumber": "+95-973-555-56"    },
        {
            "PhoneNumber": "+95-997-555-1818"    },
        {
            "PhoneNumber": "+95-991-555-457"    },
        {
            "PhoneNumber": "+95-991-555-668"    },
        {
            "PhoneNumber": "+95-943-555-647"    },
        {
            "PhoneNumber": "+95-926-555-6003"    },
        {
            "PhoneNumber": "+95-965-554-50"    },
        {
            "PhoneNumber": "+95-996-555-96"    },
        {
            "PhoneNumber": "+95-996-555-9894"    },
        {
            "PhoneNumber": "+95-991-555-6974"    },
        {
            "PhoneNumber": "+95-926-555-71"    },
        {
            "PhoneNumber": "+95-925-555-25"    },
        {
            "PhoneNumber": "+95-925-555-389"    },
        {
            "PhoneNumber": "+95-965-554-0697"    },
        {
            "PhoneNumber": "+95-991-555-7554"    },
        {
            "PhoneNumber": "+95-925-558-65"    },
        {
            "PhoneNumber": "+95-955-557-06"    },
        {
            "PhoneNumber": "+95-973-555-27"    },
        {
            "PhoneNumber": "+95-973-555-939"    },
        {
            "PhoneNumber": "+95-955-551-1355"    },
        {
            "PhoneNumber": "+95-991-555-155"    },
        {
            "PhoneNumber": "+95-955-551-5087"    },
        {
            "PhoneNumber": "+95-996-555-814"    },
        {
            "PhoneNumber": "+95-965-552-340"    },
        {
            "PhoneNumber": "+95-955-551-9978"    },
        {
            "PhoneNumber": "+95-955-555-89"    },
        {
            "PhoneNumber": "+95-925-555-66"    },
        {
            "PhoneNumber": "+95-996-555-57"    },
        {
            "PhoneNumber": "+95-943-555-631"    },
        {
            "PhoneNumber": "+95-943-555-2547"    },
        {
            "PhoneNumber": "+95-965-553-823"    },
        {
            "PhoneNumber": "+95-925-557-50"    },
        {
            "PhoneNumber": "+95-979-555-445"    },
        {
            "PhoneNumber": "+95-955-552-366"    },
        {
            "PhoneNumber": "+95-943-555-6340"    },
        {
            "PhoneNumber": "+95-991-555-7685"    },
        {
            "PhoneNumber": "+95-944-555-28"    },
        {
            "PhoneNumber": "+95-926-555-3112"    },
        {
            "PhoneNumber": "+95-996-555-4302"    },
        {
            "PhoneNumber": "+95-991-555-5369"    },
        {
            "PhoneNumber": "+95-973-555-296"    },
        {
            "PhoneNumber": "+95-991-555-543"    },
        {
            "PhoneNumber": "+95-955-559-663"    },
        {
            "PhoneNumber": "+95-925-559-757"    },
        {
            "PhoneNumber": "+95-991-555-8819"    },
        {
            "PhoneNumber": "+95-977-555-120"    },
        {
            "PhoneNumber": "+95-996-555-72"    },
        {
            "PhoneNumber": "+95-955-552-87"    },
        {
            "PhoneNumber": "+95-997-555-35"    },
        {
            "PhoneNumber": "+95-991-555-33"    },
        {
            "PhoneNumber": "+95-943-555-32"    },
        {
            "PhoneNumber": "+95-973-555-1824"    },
        {
            "PhoneNumber": "+95-925-552-71"    },
        {
            "PhoneNumber": "+95-996-555-15"    },
        {
            "PhoneNumber": "+95-973-555-579"    },
        {
            "PhoneNumber": "+95-955-558-5126"    },
        {
            "PhoneNumber": "+95-979-555-0249"    },
        {
            "PhoneNumber": "+95-943-555-9718"    },
        {
            "PhoneNumber": "+95-997-555-516"    },
        {
            "PhoneNumber": "+95-943-555-64"    },
        {
            "PhoneNumber": "+95-925-555-47"    },
        {
            "PhoneNumber": "+95-991-555-232"    },
        {
            "PhoneNumber": "+95-991-555-84"    },
        {
            "PhoneNumber": "+95-996-555-787"    },
        {
            "PhoneNumber": "+95-991-555-5981"    },
        {
            "PhoneNumber": "+95-944-555-4936"    },
        {
            "PhoneNumber": "+95-944-555-5246"    },
        {
            "PhoneNumber": "+95-991-555-264"    },
        {
            "PhoneNumber": "+95-955-552-08"    },
        {
            "PhoneNumber": "+95-991-555-0673"    },
        {
            "PhoneNumber": "+95-991-555-1511"    },
        {
            "PhoneNumber": "+95-925-555-78"    },
        {
            "PhoneNumber": "+95-943-555-1986"    },
        {
            "PhoneNumber": "+95-979-555-688"    },
        {
            "PhoneNumber": "+95-965-553-74"    },
        {
            "PhoneNumber": "+95-925-550-25"    },
        {
            "PhoneNumber": "+95-997-555-86"    },
        {
            "PhoneNumber": "+95-926-555-8814"    },
        {
            "PhoneNumber": "+95-977-555-19"    },
        {
            "PhoneNumber": "+95-926-555-15"    },
        {
            "PhoneNumber": "+95-973-555-242"    },
        {
            "PhoneNumber": "+95-996-555-883"    },
        {
            "PhoneNumber": "+95-944-555-75"    },
        {
            "PhoneNumber": "+95-926-555-94"    },
        {
            "PhoneNumber": "+95-991-555-02"    },
        {
            "PhoneNumber": "+95-926-555-635"    },
        {
            "PhoneNumber": "+95-955-552-18"    },
        {
            "PhoneNumber": "+95-973-555-44"    },
        {
            "PhoneNumber": "+95-965-552-2411"    },
        {
            "PhoneNumber": "+95-925-555-45"    },
        {
            "PhoneNumber": "+95-997-555-57"    },
        {
            "PhoneNumber": "+95-943-555-9177"    },
        {
            "PhoneNumber": "+95-973-555-0457"    },
        {
            "PhoneNumber": "+95-925-555-30"    },
        {
            "PhoneNumber": "+95-996-555-4942"    },
        {
            "PhoneNumber": "+95-991-555-61"    },
        {
            "PhoneNumber": "+95-943-555-43"    },
        {
            "PhoneNumber": "+95-973-555-91"    },
        {
            "PhoneNumber": "+95-944-555-880"    },
        {
            "PhoneNumber": "+95-991-555-0128"    },
        {
            "PhoneNumber": "+95-996-555-3506"    },
        {
            "PhoneNumber": "+95-925-555-73"    },
        {
            "PhoneNumber": "+95-943-555-846"    },
        {
            "PhoneNumber": "+95-965-559-20"    },
        {
            "PhoneNumber": "+95-944-555-43"    },
        {
            "PhoneNumber": "+95-997-555-4715"    },
        {
            "PhoneNumber": "+95-996-555-2307"    },
        {
            "PhoneNumber": "+95-997-555-077"    },
        {
            "PhoneNumber": "+95-955-557-889"    },
        {
            "PhoneNumber": "+95-965-552-6284"    },
        {
            "PhoneNumber": "+95-925-555-48"    },
        {
            "PhoneNumber": "+95-926-555-636"    },
        {
            "PhoneNumber": "+95-944-555-259"    },
        {
            "PhoneNumber": "+95-973-555-6115"    },
        {
            "PhoneNumber": "+95-955-553-8185"    },
        {
            "PhoneNumber": "+95-925-555-07"    },
        {
            "PhoneNumber": "+95-943-555-77"    },
        {
            "PhoneNumber": "+95-997-555-199"    },
        {
            "PhoneNumber": "+95-925-555-809"    },
        {
            "PhoneNumber": "+95-977-555-256"    },
        {
            "PhoneNumber": "+95-925-551-467"    },
        {
            "PhoneNumber": "+95-925-555-6055"    },
        {
            "PhoneNumber": "+95-925-555-041"    },
        {
            "PhoneNumber": "+95-991-555-752"    },
        {
            "PhoneNumber": "+95-944-555-0956"    },
        {
            "PhoneNumber": "+95-965-552-38"    },
        {
            "PhoneNumber": "+95-926-555-5454"    },
        {
            "PhoneNumber": "+95-925-555-99"    },
        {
            "PhoneNumber": "+95-944-555-1698"    },
        {
            "PhoneNumber": "+95-973-555-696"    },
        {
            "PhoneNumber": "+95-925-559-6545"    },
        {
            "PhoneNumber": "+95-991-555-912"    },
        {
            "PhoneNumber": "+95-996-555-301"    },
        {
            "PhoneNumber": "+95-965-557-32"    },
        {
            "PhoneNumber": "+95-925-556-138"    },
        {
            "PhoneNumber": "+95-991-555-549"    },
        {
            "PhoneNumber": "+95-925-550-594"    },
        {
            "PhoneNumber": "+95-996-555-1805"    },
        {
            "PhoneNumber": "+95-943-555-3099"    },
        {
            "PhoneNumber": "+95-996-555-3268"    },
        {
            "PhoneNumber": "+95-996-555-482"    },
        {
            "PhoneNumber": "+95-925-555-7326"    },
        {
            "PhoneNumber": "+95-991-555-925"    },
        {
            "PhoneNumber": "+95-955-557-1874"    },
        {
            "PhoneNumber": "+95-977-555-49"    },
        {
            "PhoneNumber": "+95-991-555-7706"    },
        {
            "PhoneNumber": "+95-955-554-33"    },
        {
            "PhoneNumber": "+95-978-555-8255"    },
        {
            "PhoneNumber": "+95-996-555-004"    },
        {
            "PhoneNumber": "+95-977-555-141"    },
        {
            "PhoneNumber": "+95-925-555-90"    },
        {
            "PhoneNumber": "+95-943-555-6714"    },
        {
            "PhoneNumber": "+95-955-556-45"    },
        {
            "PhoneNumber": "+95-991-555-41"    },
        {
            "PhoneNumber": "+95-973-555-9466"    },
        {
            "PhoneNumber": "+95-991-555-3956"    },
        {
            "PhoneNumber": "+95-943-555-0092"    },
        {
            "PhoneNumber": "+95-991-555-594"    },
        {
            "PhoneNumber": "+95-973-555-7948"    },
        {
            "PhoneNumber": "+95-955-556-411"    },
        {
            "PhoneNumber": "+95-997-555-1664"    },
        {
            "PhoneNumber": "+95-925-552-4379"    },
        {
            "PhoneNumber": "+95-943-555-7708"    },
        {
            "PhoneNumber": "+95-997-555-9621"    },
        {
            "PhoneNumber": "+95-943-555-70"    },
        {
            "PhoneNumber": "+95-943-555-71"    },
        {
            "PhoneNumber": "+95-973-555-48"    },
        {
            "PhoneNumber": "+95-991-555-63"    },
        {
            "PhoneNumber": "+95-996-555-753"    },
        {
            "PhoneNumber": "+95-996-555-081"    },
        {
            "PhoneNumber": "+95-955-554-76"    },
        {
            "PhoneNumber": "+95-991-555-567"    },
        {
            "PhoneNumber": "+95-943-555-9885"    },
        {
            "PhoneNumber": "+95-991-555-85"    },
        {
            "PhoneNumber": "+95-973-555-53"    },
        {
            "PhoneNumber": "+95-979-555-79"    },
        {
            "PhoneNumber": "+95-991-555-2747"    },
        {
            "PhoneNumber": "+95-991-555-1006"    },
        {
            "PhoneNumber": "+95-944-555-4734"    },
        {
            "PhoneNumber": "+95-926-555-856"    },
        {
            "PhoneNumber": "+95-943-555-929"    },
        {
            "PhoneNumber": "+95-996-555-938"    },
        {
            "PhoneNumber": "+95-979-555-355"    },
        {
            "PhoneNumber": "+95-965-557-1711"    },
        {
            "PhoneNumber": "+95-955-553-352"    },
        {
            "PhoneNumber": "+95-955-555-77"    },
        {
            "PhoneNumber": "+95-973-555-3538"    },
        {
            "PhoneNumber": "+95-996-555-246"    },
        {
            "PhoneNumber": "+95-991-555-153"    },
        {
            "PhoneNumber": "+95-991-555-6696"    },
        {
            "PhoneNumber": "+95-955-550-369"    },
        {
            "PhoneNumber": "+95-996-555-502"    },
        {
            "PhoneNumber": "+95-991-555-836"    },
        {
            "PhoneNumber": "+95-926-555-67"    },
        {
            "PhoneNumber": "+95-991-555-37"    },
        {
            "PhoneNumber": "+95-944-555-9732"    },
        {
            "PhoneNumber": "+95-943-555-8734"    },
        {
            "PhoneNumber": "+95-955-553-291"    },
        {
            "PhoneNumber": "+95-997-555-080"    },
        {
            "PhoneNumber": "+95-925-555-5504"    },
        {
            "PhoneNumber": "+95-925-555-3858"    },
        {
            "PhoneNumber": "+95-965-551-4373"    },
        {
            "PhoneNumber": "+95-997-555-3959"    },
        {
            "PhoneNumber": "+95-996-555-36"    },
        {
            "PhoneNumber": "+95-997-555-82"    },
        {
            "PhoneNumber": "+95-925-555-094"    },
        {
            "PhoneNumber": "+95-997-555-520"    },
        {
            "PhoneNumber": "+95-925-557-333"    },
        {
            "PhoneNumber": "+95-925-551-358"    },
        {
            "PhoneNumber": "+95-991-555-8640"    },
        {
            "PhoneNumber": "+95-925-555-59"    },
        {
            "PhoneNumber": "+95-991-555-277"    },
        {
            "PhoneNumber": "+95-926-555-4973"    },
        {
            "PhoneNumber": "+95-973-555-592"    },
        {
            "PhoneNumber": "+95-991-555-8972"    },
        {
            "PhoneNumber": "+95-926-555-2720"    },
        {
            "PhoneNumber": "+95-977-555-24"    },
        {
            "PhoneNumber": "+95-944-555-9444"    },
        {
            "PhoneNumber": "+95-925-558-138"    },
        {
            "PhoneNumber": "+95-926-555-2268"    },
        {
            "PhoneNumber": "+95-991-555-0718"    },
        {
            "PhoneNumber": "+95-943-555-604"    },
        {
            "PhoneNumber": "+95-925-555-740"    },
        {
            "PhoneNumber": "+95-925-558-189"    },
        {
            "PhoneNumber": "+95-996-555-79"    },
        {
            "PhoneNumber": "+95-944-555-8973"    },
        {
            "PhoneNumber": "+95-991-555-92"    },
        {
            "PhoneNumber": "+95-991-555-006"    },
        {
            "PhoneNumber": "+95-996-555-5651"    },
        {
            "PhoneNumber": "+95-926-555-39"    },
        {
            "PhoneNumber": "+95-925-555-53"    },
        {
            "PhoneNumber": "+95-997-555-69"    },
        {
            "PhoneNumber": "+95-977-555-6498"    },
        {
            "PhoneNumber": "+95-965-555-285"    },
        {
            "PhoneNumber": "+95-996-555-65"    },
        {
            "PhoneNumber": "+95-991-555-867"    },
        {
            "PhoneNumber": "+95-943-555-69"    },
        {
            "PhoneNumber": "+95-973-555-59"    },
        {
            "PhoneNumber": "+95-925-555-5943"    },
        {
            "PhoneNumber": "+95-991-555-04"    },
        {
            "PhoneNumber": "+95-997-555-7032"    },
        {
            "PhoneNumber": "+95-973-555-670"    },
        {
            "PhoneNumber": "+95-925-556-175"    },
        {
            "PhoneNumber": "+95-991-555-870"    },
        {
            "PhoneNumber": "+95-978-555-8030"    },
        {
            "PhoneNumber": "+95-973-555-2622"    },
        {
            "PhoneNumber": "+95-991-555-2220"    },
        {
            "PhoneNumber": "+95-944-555-9735"    },
        {
            "PhoneNumber": "+95-991-555-8780"    },
        {
            "PhoneNumber": "+95-991-555-8558"    },
        {
            "PhoneNumber": "+95-973-555-0779"    },
        {
            "PhoneNumber": "+95-973-555-131"    },
        {
            "PhoneNumber": "+95-973-555-458"    },
        {
            "PhoneNumber": "+95-977-555-2148"    },
        {
            "PhoneNumber": "+95-965-553-26"    },
        {
            "PhoneNumber": "+95-996-555-14"    },
        {
            "PhoneNumber": "+95-943-555-6054"    },
        {
            "PhoneNumber": "+95-977-555-9169"    },
        {
            "PhoneNumber": "+95-925-555-792"    },
        {
            "PhoneNumber": "+95-925-555-81"    },
        {
            "PhoneNumber": "+95-996-555-2751"    },
        {
            "PhoneNumber": "+95-997-555-8534"    },
        {
            "PhoneNumber": "+95-996-555-049"    },
        {
            "PhoneNumber": "+95-996-555-69"    },
        {
            "PhoneNumber": "+95-943-555-23"    },
        {
            "PhoneNumber": "+95-973-555-043"    },
        {
            "PhoneNumber": "+95-925-555-170"    },
        {
            "PhoneNumber": "+95-991-555-28"    },
        {
            "PhoneNumber": "+95-965-550-25"    },
        {
            "PhoneNumber": "+95-996-555-7764"    },
        {
            "PhoneNumber": "+95-991-555-9917"    },
        {
            "PhoneNumber": "+95-977-555-800"    },
        {
            "PhoneNumber": "+95-944-555-7306"    },
        {
            "PhoneNumber": "+95-991-555-77"    },
        {
            "PhoneNumber": "+95-973-555-520"    },
        {
            "PhoneNumber": "+95-943-555-03"    },
        {
            "PhoneNumber": "+95-978-555-46"    },
        {
            "PhoneNumber": "+95-991-555-808"    },
        {
            "PhoneNumber": "+95-996-555-42"    },
        {
            "PhoneNumber": "+95-955-559-5225"    },
        {
            "PhoneNumber": "+95-973-555-25"    },
        {
            "PhoneNumber": "+95-977-555-2804"    },
        {
            "PhoneNumber": "+95-997-555-399"    },
        {
            "PhoneNumber": "+95-943-555-30"    },
        {
            "PhoneNumber": "+95-979-555-97"    },
        {
            "PhoneNumber": "+95-991-555-996"    },
        {
            "PhoneNumber": "+95-991-555-371"    },
        {
            "PhoneNumber": "+95-997-555-3073"    },
        {
            "PhoneNumber": "+95-978-555-75"    },
        {
            "PhoneNumber": "+95-925-556-599"    },
        {
            "PhoneNumber": "+95-979-555-7958"    },
        {
            "PhoneNumber": "+95-944-555-632"    },
        {
            "PhoneNumber": "+95-991-555-25"    },
        {
            "PhoneNumber": "+95-991-555-908"    },
        {
            "PhoneNumber": "+95-996-555-6175"    },
        {
            "PhoneNumber": "+95-955-556-49"    },
        {
            "PhoneNumber": "+95-991-555-7235"    },
        {
            "PhoneNumber": "+95-997-555-123"    },
        {
            "PhoneNumber": "+95-996-555-7102"    },
        {
            "PhoneNumber": "+95-944-555-099"    },
        {
            "PhoneNumber": "+95-996-555-70"    },
        {
            "PhoneNumber": "+95-991-555-50"    },
        {
            "PhoneNumber": "+95-973-555-242"    },
        {
            "PhoneNumber": "+95-965-556-71"    },
        {
            "PhoneNumber": "+95-991-555-610"    },
        {
            "PhoneNumber": "+95-943-555-3267"    },
        {
            "PhoneNumber": "+95-965-557-10"    },
        {
            "PhoneNumber": "+95-925-555-685"    },
        {
            "PhoneNumber": "+95-991-555-58"    },
        {
            "PhoneNumber": "+95-944-555-6288"    },
        {
            "PhoneNumber": "+95-925-559-8319"    },
        {
            "PhoneNumber": "+95-973-555-4986"    },
        {
            "PhoneNumber": "+95-991-555-47"    },
        {
            "PhoneNumber": "+95-991-555-434"    },
        {
            "PhoneNumber": "+95-943-555-0749"    },
        {
            "PhoneNumber": "+95-925-552-2036"    },
        {
            "PhoneNumber": "+95-991-555-0534"    },
        {
            "PhoneNumber": "+95-944-555-6540"    },
        {
            "PhoneNumber": "+95-991-555-24"    },
        {
            "PhoneNumber": "+95-991-555-3423"    },
        {
            "PhoneNumber": "+95-978-555-91"    },
        {
            "PhoneNumber": "+95-955-555-831"    },
        {
            "PhoneNumber": "+95-996-555-75"    },
        {
            "PhoneNumber": "+95-925-555-179"    },
        {
            "PhoneNumber": "+95-926-555-64"    },
        {
            "PhoneNumber": "+95-944-555-33"    },
        {
            "PhoneNumber": "+95-925-554-40"    },
        {
            "PhoneNumber": "+95-965-550-0654"    },
        {
            "PhoneNumber": "+95-991-555-1087"    },
        {
            "PhoneNumber": "+95-955-551-94"    },
        {
            "PhoneNumber": "+95-943-555-46"    },
        {
            "PhoneNumber": "+95-944-555-6734"    },
        {
            "PhoneNumber": "+95-944-555-08"    },
        {
            "PhoneNumber": "+95-925-555-762"    },
        {
            "PhoneNumber": "+95-973-555-8041"    },
        {
            "PhoneNumber": "+95-944-555-959"    },
        {
            "PhoneNumber": "+95-944-555-451"    },
        {
            "PhoneNumber": "+95-979-555-9915"    },
        {
            "PhoneNumber": "+95-996-555-2012"    },
        {
            "PhoneNumber": "+95-925-555-7566"    },
        {
            "PhoneNumber": "+95-996-555-19"    },
        {
            "PhoneNumber": "+95-996-555-932"    },
        {
            "PhoneNumber": "+95-925-557-2703"    },
        {
            "PhoneNumber": "+95-997-555-94"    },
        {
            "PhoneNumber": "+95-926-555-269"    },
        {
            "PhoneNumber": "+95-944-555-038"    },
        {
            "PhoneNumber": "+95-955-552-229"    },
        {
            "PhoneNumber": "+95-996-555-064"    },
        {
            "PhoneNumber": "+95-944-555-198"    },
        {
            "PhoneNumber": "+95-925-558-24"    },
        {
            "PhoneNumber": "+95-943-555-76"    },
        {
            "PhoneNumber": "+95-925-555-025"    },
        {
            "PhoneNumber": "+95-925-555-597"    },
        {
            "PhoneNumber": "+95-973-555-166"    },
        {
            "PhoneNumber": "+95-996-555-85"    },
        {
            "PhoneNumber": "+95-925-555-847"    },
        {
            "PhoneNumber": "+95-925-555-61"    },
        {
            "PhoneNumber": "+95-955-552-7658"    },
        {
            "PhoneNumber": "+95-955-557-36"    },
        {
            "PhoneNumber": "+95-955-551-0350"    },
        {
            "PhoneNumber": "+95-925-555-02"    },
        {
            "PhoneNumber": "+95-925-559-7813"    },
        {
            "PhoneNumber": "+95-925-555-4541"    },
        {
            "PhoneNumber": "+95-997-555-2999"    },
        {
            "PhoneNumber": "+95-997-555-0589"    },
        {
            "PhoneNumber": "+95-925-555-27"    },
        {
            "PhoneNumber": "+95-978-555-45"    },
        {
            "PhoneNumber": "+95-978-555-42"    },
        {
            "PhoneNumber": "+95-926-555-26"    },
        {
            "PhoneNumber": "+95-955-550-7414"    },
        {
            "PhoneNumber": "+95-925-555-5829"    },
        {
            "PhoneNumber": "+95-991-555-286"    },
        {
            "PhoneNumber": "+95-996-555-6461"    },
        {
            "PhoneNumber": "+95-926-555-89"    },
        {
            "PhoneNumber": "+95-996-555-405"    },
        {
            "PhoneNumber": "+95-973-555-33"    },
        {
            "PhoneNumber": "+95-977-555-6383"    },
        {
            "PhoneNumber": "+95-965-555-81"    },
        {
            "PhoneNumber": "+95-944-555-24"    },
        {
            "PhoneNumber": "+95-925-559-857"    },
        {
            "PhoneNumber": "+95-944-555-8756"    },
        {
            "PhoneNumber": "+95-973-555-0494"    },
        {
            "PhoneNumber": "+95-925-555-646"    },
        {
            "PhoneNumber": "+95-925-554-2191"    },
        {
            "PhoneNumber": "+95-943-555-2939"    },
        {
            "PhoneNumber": "+95-944-555-0168"    },
        {
            "PhoneNumber": "+95-926-555-5351"    },
        {
            "PhoneNumber": "+95-997-555-144"    },
        {
            "PhoneNumber": "+95-925-555-32"    },
        {
            "PhoneNumber": "+95-925-555-6338"    },
        {
            "PhoneNumber": "+95-925-555-0087"    },
        {
            "PhoneNumber": "+95-943-555-8113"    },
        {
            "PhoneNumber": "+95-991-555-43"    },
        {
            "PhoneNumber": "+95-925-555-4830"    },
        {
            "PhoneNumber": "+95-944-555-001"    },
        {
            "PhoneNumber": "+95-991-555-01"    },
        {
            "PhoneNumber": "+95-979-555-23"    },
        {
            "PhoneNumber": "+95-991-555-70"    },
        {
            "PhoneNumber": "+95-925-557-09"    },
        {
            "PhoneNumber": "+95-991-555-939"    },
        {
            "PhoneNumber": "+95-944-555-408"    },
        {
            "PhoneNumber": "+95-965-554-3531"    },
        {
            "PhoneNumber": "+95-925-555-3625"    },
        {
            "PhoneNumber": "+95-965-552-8228"    },
        {
            "PhoneNumber": "+95-965-556-831"    },
        {
            "PhoneNumber": "+95-925-558-41"    },
        {
            "PhoneNumber": "+95-996-555-617"    },
        {
            "PhoneNumber": "+95-943-555-303"    },
        {
            "PhoneNumber": "+95-996-555-92"    },
        {
            "PhoneNumber": "+95-955-552-98"    },
        {
            "PhoneNumber": "+95-926-555-3711"    },
        {
            "PhoneNumber": "+95-965-553-67"    },
        {
            "PhoneNumber": "+95-996-555-0295"    },
        {
            "PhoneNumber": "+95-926-555-73"    },
        {
            "PhoneNumber": "+95-965-555-8874"    },
        {
            "PhoneNumber": "+95-991-555-779"    },
        {
            "PhoneNumber": "+95-997-555-035"    },
        {
            "PhoneNumber": "+95-78-657-7883"    }
    ]

    result.innerHTML = '';
    resultView.forEach(user => {
        const li = document.createElement('li');
        listItem.push(li);
        li.innerHTML = `
            <img src="mm.png" alt="Myanmar">
            <div class="user-info">
                <h4>${user.PhoneNumber}</h4>
                
            </div>
            <p>Myanmar</p>
            `;
            
        result.appendChild(li);
        total.innerHTML = resultView.length +"+";

        //add click even to copy the phone number
        li.addEventListener('click', () => {
            copyToClipboard(user.PhoneNumber);
        });
    });
}
//Function to copy text to clipboard
function copyToClipboard(text){
    navigator.clipboard.writeText(text)
    .then(()=>{
        alert(`Copide: ${text}`);
    })
    .catch((err)=>{
        alert('Failed to copy teext: ', err);
    })
}

// Optional: Add filtering functionality
filter.addEventListener('input', (e) => {
    const numberOfResults = parseInt(e.target.value,10);
    if(isNaN(numberOfResults) || numberOfResults <=0){
        listItem.forEach((item,index)=>{
            item.classList.remove('hide');
        });
    }else{
        //Show only the specified number of results
        listItem.forEach((item,index)=>{
            if(index< numberOfResults){
                item.classList.remove('hide');
            }else{
                item.classList.add('hide');
            }
        })
    }
});