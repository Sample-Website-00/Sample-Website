// product.js
const products = [
    {
        id: 1,
        category: "Digital Software",
        title: "LOKTV PREMIUM (MOD APP)",
        description: "Premium streaming access for all devices.",
        devices: [
            { name: "Android Phone", oldPrice: "RM15.00", newPrice: "RM5.00" },
            { name: "Android Tablet", oldPrice: "RM15.00", newPrice: "RM7.00" },
            { name: "Android Projector", oldPrice: "RM20.00", newPrice: "RM8.00" },
            { name: "Android TV/Box", oldPrice: "RM20.00", newPrice: "RM9.00" }
        ],
        // The summary at the very bottom of the card
        originalPrice: "RM10.00", 
        currentPrice: "RM3.00", // Usually set this to your lowest price
        saveAmount: "RM7.00",
        image: "images/loktv.png",
        borderColor: "border-purple-600",
        discountBadge: "40% OFF"
    },
    {
        id: 2,
        category: "Digital Software",
        title: "LOKLOK PREMIUM (MOD APP)",
        description: "Premium streaming access for all devices.",
        devices: [
            { name: "Android Phone", oldPrice: "RM10.00", newPrice: "RM5.00" },
            { name: "Android Tablet", oldPrice: "RM15.00", newPrice: "RM7.00" },
            { name: "Android Projector", oldPrice: "RM20.00", newPrice: "RM8.00" },
            { name: "Android TV/Box", oldPrice: "RM20.00", newPrice: "RM9.00" }
        ],
        image: "images/loklok.png",
        borderColor: "border-[#fde047]",
        discountBadge: "35% OFF"
    },
    {
        id: 3,
        category: "Digital Software",
        title: "MOVIEBOX PREMIUM (MOD APP)",
        description: "Premium streaming access for all devices.",
        devices: [
            { name: "Android Phone", oldPrice: "RM10.00", newPrice: "RM4.00" },
            { name: "Android Tablet", oldPrice: "RM15.00", newPrice: "RM6.00" },
            { name: "Android Projector", oldPrice: "RM20.00", newPrice: "RM8.00" },
            { name: "Android TV/Box", oldPrice: "RM20.00", newPrice: "RM10.00" }
        ],
        image: "images/moviebox.png",
        borderColor: "border-blue-600",
        discountBadge: "50% OFF"
    },
    {
        id: 4,
        category: "Digital Software",
        title: "ALL IN ONE STREAMING APP",
        description: "Premium streaming access for all devices.",
        devices: [
            { name: "Android Phone", oldPrice: "RM10.00", newPrice: "RM8.00" },
            { name: "Android Tablet", oldPrice: "RM15.00", newPrice: "RM10.00" },
            { name: "Windows PC", oldPrice: "RM15.00", newPrice: "RM12.00" },
            { name: "Android Projector", oldPrice: "RM20.00", newPrice: "RM14.00" },
            { name: "Android TV/Box", oldPrice: "RM20.00", newPrice: "RM16.00" }
        ],
        image: "images/allinmovie.jpeg",
        borderColor: "border-blue-600",
        discountBadge: "50% OFF"
    },
    {
        id: 5,
        category: "Digital Software",
        title: "DRAMAWAVE PREMIUM (MOD APP)",
        description: "Premium streaming access for all devices.",
        devices: [
            { name: "Android Phone", oldPrice: "RM10.00", newPrice: "RM4.00" },
            { name: "Android Tablet", oldPrice: "RM15.00", newPrice: "RM6.00" },
        ],
        image: "images/dramawave.png",
        borderColor: "border-red-500",
        discountBadge: "45% OFF"
    },
    {
        id: 5,
        category: "Digital Software",
        title: "YOUTUBE VIDEO PREMIUM (MOD APP)",
        description: "Premium streaming access for all devices.",
        devices: [
            { name: "YT Video For Phone", oldPrice: "RM10.00", newPrice: "RM3.00" },
            { name: "YT Music For Phone", oldPrice: "RM15.00", newPrice: "RM3.00" },
            { name: "YT Video & Music For Phone", oldPrice: "RM20.00", newPrice: "RM5.50" },
            { name: "YT Video For TV", oldPrice: "RM15.00", newPrice: "RM8.00" },
        ],
        image: "images/YTVideo.jpg",
        borderColor: "border-red-500",
        discountBadge: "45% OFF"
    },
    {
        id: 6,
        category: "Digital Software",
        title: "YOUTUBE MUSIC PREMIUM (MOD APP)",
        description: "Premium streaming access for all devices.",
        devices: [
            { name: "YT Video For Phone", oldPrice: "RM10.00", newPrice: "RM3.00" },
            { name: "YT Music For Phone", oldPrice: "RM15.00", newPrice: "RM3.00" },
            { name: "YT Video & Music For Phone", oldPrice: "RM20.00", newPrice: "RM5.50" },
            { name: "YT Video For TV", oldPrice: "RM15.00", newPrice: "RM8.00" },
        ],
        image: "images/YTUBEMUSIC.webp",
        borderColor: "border-red-500",
        discountBadge: "45% OFF"
    },
    {
        id: 7,
        category: "Digital Software",
        title: "STORYREELS PREMIUM (MOD APP)",
        description: "Premium streaming access for all devices.",
        devices: [
            { name: "Android Phone", oldPrice: "RM10.00", newPrice: "RM5.00" },
            { name: "Android Tablet", oldPrice: "RM15.00", newPrice: "RM7.00" },
        ],
        image: "images/storyreel.png",
        borderColor: "border-red-500",
        discountBadge: "45% OFF"
    },
    {
        id: 8,
        category: "Digital Software",
        title: "FLICKREELS PREMIUM (MOD APP)",
        description: "Premium streaming access for all devices.",
        devices: [
            { name: "Android Phone", oldPrice: "RM10.00", newPrice: "RM5.00" },
            { name: "Android Tablet", oldPrice: "RM15.00", newPrice: "RM7.00" },
        ],
        image: "images/flickreels.jpg",
        borderColor: "border-red-500",
        discountBadge: "45% OFF"
    },
    {
        id: 9,
        category: "Digital Software",
        title: "OTT NAVIGATOR ",
        description: "Premium streaming access for all devices.",
        devices: [
            { name: "Android Phone", oldPrice: "RM10.00", newPrice: "RM6.00" },
            { name: "Android Tablet", oldPrice: "RM15.00", newPrice: "RM8.00" },
            { name: "Android TV/Box", oldPrice: "RM15.00", newPrice: "RM10.00" },
        ],
        image: "images/OTT.png",
        borderColor: "border-red-500",
        discountBadge: "45% OFF"
    },
    {
        id: 10,
        category: "Digital Software",
        title: "CAMSCANNER PREMIUM For Android (MOD APP) ",
        description: "Premium streaming access for all devices.",
        devices: [
            { name: "Camscanner", oldPrice: "RM10.00", newPrice: "RM3.00" },
            { name: "PDF Editor", oldPrice: "RM15.00", newPrice: "RM3.00" },
            { name: "Camscanner & PDF Editor", oldPrice: "RM10.00", newPrice: "RM5.50" },
        ],
        image: "images/camscanner.png",
        borderColor: "border-red-500",
        discountBadge: "45% OFF"
    },
    {
        id: 11,
        category: "Digital Software",
        title: "PDF EDITOR PREMIUM For Android (MOD APP)",
        description: "Premium streaming access for all devices.",
        devices: [
            { name: "Camscanner", oldPrice: "RM10.00", newPrice: "RM3.00" },
            { name: "PDF Editor", oldPrice: "RM15.00", newPrice: "RM3.00" },
            { name: "Camscanner & PDF Editor", oldPrice: "RM10.00", newPrice: "RM5.50" },
        ],
        image: "images/pdfeditor.webp",
        borderColor: "border-red-500",
        discountBadge: "45% OFF"
    },
    {
        id: 12,
        category: "Digital Software",
        title: "WPS OFFICE PREMIUM For Android (MOD APP)",
        description: "Premium streaming access for all devices.",
        devices: [
            { name: "WPS Office", oldPrice: "RM10.00", newPrice: "RM3.00" },
            { name: "Camscanner", oldPrice: "RM15.00", newPrice: "RM3.00" },
            { name: "WPS Office & Camscanner", oldPrice: "RM10.00", newPrice: "RM5.50" },
        ],
        image: "images/WPS.png",
        borderColor: "border-red-500",
        discountBadge: "45% OFF"
    },
    {
        id: 12,
        category: "Digital Software",
        title: "MYDRAMA PREMIUM (MOD APP)",
        description: "Premium streaming access for all devices.",
        devices: [
            { name: "Android Phone", oldPrice: "RM10.00", newPrice: "RM2.00" },
            { name: "Android Tablet", oldPrice: "RM15.00", newPrice: "RM4.00" },
        ],
        image: "images/mydrama.png",
        borderColor: "border-red-500",
        discountBadge: "45% OFF"
    },
    {
        id: 13,
        category: "Digital Software",
        title: "DRAMARUSH PREMIUM (MOD APP)",
        description: "Premium streaming access for all devices.",
        devices: [
            { name: "Android Phone", oldPrice: "RM10.00", newPrice: "RM2.00" },
            { name: "Android Tablet", oldPrice: "RM15.00", newPrice: "RM4.00" },
        ],
        image: "images/dramarush.jpg",
        borderColor: "border-red-500",
        discountBadge: "45% OFF"
    },
    {
        id: 13,
        category: "Digital Software",
        title: "SHORTREELS PREMIUM (MOD APP)",
        description: "Premium streaming access for all devices.",
        devices: [
            { name: "Android Phone", oldPrice: "RM10.00", newPrice: "RM2.00" },
            { name: "Android Tablet", oldPrice: "RM15.00", newPrice: "RM4.00" },
        ],
        image: "images/shortreels.jpg",
        borderColor: "border-red-500",
        discountBadge: "45% OFF"
    },
    {
        id: 14,
        category: "Digital Software",
        title: "HITV PREMIUM (MOD APP)",
        description: "Premium streaming access for all devices.",
        devices: [
            { name: "Android Phone", oldPrice: "RM10.00", newPrice: "RM3.00" },
            { name: "Android Tablet", oldPrice: "RM15.00", newPrice: "RM5.00" },
        ],
        image: "images/hitv.jpg",
        borderColor: "border-red-500",
        discountBadge: "45% OFF"
    },
    {
        id: 15,
        category: "Digital Software",
        title: "ALL IN ONE ANIME STREAMING APP",
        description: "Premium streaming access for all devices.",
        devices: [
            { name: "Android Phone", oldPrice: "RM10.00", newPrice: "RM2.00" },
            { name: "Android Tablet", oldPrice: "RM15.00", newPrice: "RM4.00" },
            { name: "Windows PC", oldPrice: "RM15.00", newPrice: "RM6.00" },
            { name: "Android Projector", oldPrice: "RM20.00", newPrice: "RM8.00" },
            { name: "Android TV/Box", oldPrice: "RM20.00", newPrice: "RM10.00" }
        ],
        image: "images/allinanime.jpeg",
        borderColor: "border-red-500",
        discountBadge: "45% OFF"
    },
    {
        id: 16,
        category: "Digital Software",
        title: "TRUECALLER PREMIUM (MOD APP)",
        description: "Premium streaming access for all devices.",
        devices: [
            { name: "Android Phone", oldPrice: "RM10.00", newPrice: "RM2.00" },
            { name: "Android Tablet", oldPrice: "RM15.00", newPrice: "RM4.00" },
        ],
        image: "images/truecaller.png",
        borderColor: "border-red-500",
        discountBadge: "45% OFF"
    },
    {
        id: 17,
        category: "Digital Software",
        title: "JOOX PREMIUM (MOD APP)",
        description: "Premium streaming access for all devices.",
        devices: [
            { name: "JOOX", oldPrice: "RM10.00", newPrice: "RM3.00" },
            { name: "Youtube Music", oldPrice: "RM15.00", newPrice: "RM3.00" },
            { name: "JOOX & Youtube Music", oldPrice: "RM15.00", newPrice: "RM5.50" },
        ],
        image: "images/joox.jpg",
        borderColor: "border-red-500",
        discountBadge: "45% OFF"
    },
    {
        id: 18,
        category: "Digital Software",
        title: "ANYREEL PREMIUM (MOD APP)",
        description: "Premium streaming access for all devices.",
        devices: [
            { name: "Android Phone", oldPrice: "RM10.00", newPrice: "RM6.00" },
            { name: "Android Tablet", oldPrice: "RM15.00", newPrice: "RM8.00" },
        ],
        image: "images/anyreel.png",
        borderColor: "border-red-500",
        discountBadge: "45% OFF"
    },
    {
        id: 19,
        category: "Digital Software",
        title: "TOONSHORT PREMIUM (MOD APP)",
        description: "Premium streaming access for all devices.",
        devices: [
            { name: "Android Phone", oldPrice: "RM10.00", newPrice: "RM6.00" },
            { name: "Android Tablet", oldPrice: "RM15.00", newPrice: "RM8.00" },
        ],
        image: "images/toonshort.jpg",
        borderColor: "border-red-500",
        discountBadge: "45% OFF"
    },
    {
        id: 20,
        category: "PREMIUM ACCOUNT",
        title: "CANVA PRO (UPDATE OWN ACCOUNT)",
        description: "Premium streaming access for all devices.",
        devices: [
            { name: "1 months", oldPrice: "RM10.00", newPrice: "RM2.00" },
            { name: "3 months", oldPrice: "RM15.00", newPrice: "RM4.00" },
            { name: "6 months", oldPrice: "RM10.00", newPrice: "RM6.00" },
            { name: "12 months", oldPrice: "RM15.00", newPrice: "RM8.00" }
        ],
        image: "images/canva.png",
        borderColor: "border-red-500",
        discountBadge: "45% OFF"
    },
    {
        id: 21,
        category: "Digital Software",
        title: "VPN SUPER UNLIMITED PROXY PREMIUM (MOD APP)",
        description: "Premium streaming access for all devices.",
        devices: [
            { name: "Android Phone", oldPrice: "RM10.00", newPrice: "RM2.00" },
            { name: "Android Tablet", oldPrice: "RM15.00", newPrice: "RM4.00" },
        ],
        image: "images/VPN.png",
        borderColor: "border-red-500",
        discountBadge: "45% OFF"
    },
    {
        id: 22,
        category: "Digital Software",
        title: "看戏神器",
        description: "Premium streaming access for all devices.",
        devices: [
            { name: "Android Phone", oldPrice: "RM10.00", newPrice: "RM5.00" },
            { name: "Android Tablet", oldPrice: "RM15.00", newPrice: "RM7.00" },
            { name: "Windows PC", oldPrice: "RM15.00", newPrice: "RM9.00" },
            { name: "Android Projector", oldPrice: "RM20.00", newPrice: "RM11.00" },
            { name: "Android TV/Box", oldPrice: "RM20.00", newPrice: "RM13.00" }
        ],
        image: "images/看戏.jpg",
        borderColor: "border-red-500",
        discountBadge: "45% OFF"
    },
    {
        id: 22,
        category: "Digital Software",
        title: "REELSHORT PREMIUM (MOD APP)",
        description: "Premium streaming access for all devices.",
        devices: [
            { name: "Android Phone", oldPrice: "RM10.00", newPrice: "RM4.00" },
            { name: "Android Tablet", oldPrice: "RM15.00", newPrice: "RM6.00" }
        ],
        image: "images/reelshort.webp",
        borderColor: "border-red-500",
        discountBadge: "45% OFF"
    },


];
