const verbData = [
  {
    present: "lie",
    past: "lay",
    pastParticiple: "lain",
    meaning: {
      present: "눕다",
      past: "누웠다",
      pastParticiple: "누워 있는 상태"
    }
  },
  {
    present: "go",
    past: "went",
    pastParticiple: "gone",
    meaning: {
      present: "가다",
      past: "갔다",
      pastParticiple: "가버린 상태 / 간 상태"
    }
  },
  {
    present: "eat",
    past: "ate",
    pastParticiple: "eaten",
    meaning: {
      present: "먹다",
      past: "먹었다",
      pastParticiple: "먹은 상태"
    }
  },
  {
    present: "see",
    past: "saw",
    pastParticiple: "seen",
    meaning: {
      present: "보다",
      past: "보았다",
      pastParticiple: "본 상태"
    }
  },
  {
    present: "write",
    past: "wrote",
    pastParticiple: "written",
    meaning: {
      present: "쓰다",
      past: "썼다",
      pastParticiple: "쓰인 상태 / 적힌 상태"
    }
  },
  {
    present: "take",
    past: "took",
    pastParticiple: "taken",
    meaning: {
      present: "가져가다 / 취하다",
      past: "가져갔다 / 취했다",
      pastParticiple: "가져가진 상태 / 취해진 상태"
    }
  },
  {
    present: "speak",
    past: "spoke",
    pastParticiple: "spoken",
    meaning: {
      present: "말하다",
      past: "말했다",
      pastParticiple: "말해진 상태"
    }
  },
  {
    present: "break",
    past: "broke",
    pastParticiple: "broken",
    meaning: {
      present: "부수다 / 깨지다",
      past: "부쉈다 / 깨졌다",
      pastParticiple: "부서진 상태 / 깨진 상태"
    }
  },
  {
    present: "choose",
    past: "chose",
    pastParticiple: "chosen",
    meaning: {
      present: "선택하다",
      past: "선택했다",
      pastParticiple: "선택된 상태"
    }
  },
  {
    present: "begin",
    past: "began",
    pastParticiple: "begun",
    meaning: {
      present: "시작하다",
      past: "시작했다",
      pastParticiple: "시작된 상태"
    }
  },
  {
    present: "be",
    past: "was/were",
    pastParticiple: "been",
    meaning: {
      present: "~이다 / 있다",
      past: "~였다 / 있었다",
      pastParticiple: "있었던 상태 / 되어 온 상태"
    }
  },
  {
    present: "become",
    past: "became",
    pastParticiple: "become",
    meaning: {
      present: "~이 되다",
      past: "~이 되었다",
      pastParticiple: "~이 된 상태"
    }
  },
  {
    present: "bend",
    past: "bent",
    pastParticiple: "bent",
    meaning: {
      present: "굽히다 / 구부리다",
      past: "굽혔다 / 구부렸다",
      pastParticiple: "굽은 상태 / 구부러진 상태"
    }
  },
  {
    present: "bite",
    past: "bit",
    pastParticiple: "bitten",
    meaning: {
      present: "물다",
      past: "물었다",
      pastParticiple: "물린 상태 / 문 상태"
    }
  },
  {
    present: "blow",
    past: "blew",
    pastParticiple: "blown",
    meaning: {
      present: "불다",
      past: "불었다",
      pastParticiple: "불어진 상태 / 날아간 상태"
    }
  },
  {
    present: "bring",
    past: "brought",
    pastParticiple: "brought",
    meaning: {
      present: "가져오다",
      past: "가져왔다",
      pastParticiple: "가져온 상태"
    }
  },
  {
    present: "broadcast",
    past: "broadcast",
    pastParticiple: "broadcast",
    meaning: {
      present: "방송하다",
      past: "방송했다",
      pastParticiple: "방송된 상태"
    }
  },
  {
    present: "build",
    past: "built",
    pastParticiple: "built",
    meaning: {
      present: "짓다 / 건설하다",
      past: "지었다 / 건설했다",
      pastParticiple: "지어진 상태 / 건설된 상태"
    }
  },
  {
    present: "buy",
    past: "bought",
    pastParticiple: "bought",
    meaning: {
      present: "사다",
      past: "샀다",
      pastParticiple: "사둔 상태 / 구매된 상태"
    }
  },
  {
    present: "catch",
    past: "caught",
    pastParticiple: "caught",
    meaning: {
      present: "잡다",
      past: "잡았다",
      pastParticiple: "잡힌 상태"
    }
  },
  {
    present: "come",
    past: "came",
    pastParticiple: "come",
    meaning: {
      present: "오다",
      past: "왔다",
      pastParticiple: "와 있는 상태"
    }
  },
  {
    present: "cost",
    past: "cost",
    pastParticiple: "cost",
    meaning: {
      present: "비용이 들다",
      past: "비용이 들었다",
      pastParticiple: "비용이 든 상태"
    }
  },
  {
    present: "cut",
    past: "cut",
    pastParticiple: "cut",
    meaning: {
      present: "자르다",
      past: "잘랐다",
      pastParticiple: "잘린 상태"
    }
  },
  {
    present: "dig",
    past: "dug",
    pastParticiple: "dug",
    meaning: {
      present: "파다",
      past: "팠다",
      pastParticiple: "파인 상태"
    }
  },
  {
    present: "do",
    past: "did",
    pastParticiple: "done",
    meaning: {
      present: "하다",
      past: "했다",
      pastParticiple: "해진 상태 / 완료된 상태"
    }
  },
  {
    present: "draw",
    past: "drew",
    pastParticiple: "drawn",
    meaning: {
      present: "그리다",
      past: "그렸다",
      pastParticiple: "그려진 상태"
    }
  },
  {
    present: "drink",
    past: "drank",
    pastParticiple: "drunk",
    meaning: {
      present: "마시다",
      past: "마셨다",
      pastParticiple: "마신 상태"
    }
  },
  {
    present: "drive",
    past: "drove",
    pastParticiple: "driven",
    meaning: {
      present: "운전하다",
      past: "운전했다",
      pastParticiple: "운전된 상태 / 몰린 상태"
    }
  },
  {
    present: "fall",
    past: "fell",
    pastParticiple: "fallen",
    meaning: {
      present: "떨어지다",
      past: "떨어졌다",
      pastParticiple: "떨어진 상태"
    }
  },
  {
    present: "feed",
    past: "fed",
    pastParticiple: "fed",
    meaning: {
      present: "먹이다 / 먹이를 주다",
      past: "먹였다 / 먹이를 주었다",
      pastParticiple: "먹이를 준 상태 / 먹여진 상태"
    }
  },
  {
    present: "feel",
    past: "felt",
    pastParticiple: "felt",
    meaning: {
      present: "느끼다",
      past: "느꼈다",
      pastParticiple: "느껴진 상태"
    }
  },
  {
    present: "fight",
    past: "fought",
    pastParticiple: "fought",
    meaning: {
      present: "싸우다",
      past: "싸웠다",
      pastParticiple: "싸운 상태"
    }
  },
  {
    present: "find",
    past: "found",
    pastParticiple: "found",
    meaning: {
      present: "찾다 / 발견하다",
      past: "찾았다 / 발견했다",
      pastParticiple: "찾은 상태 / 발견된 상태"
    }
  },
  {
    present: "fit",
    past: "fit",
    pastParticiple: "fit",
    meaning: {
      present: "맞다 / 꼭 맞게 하다",
      past: "맞았다 / 꼭 맞게 했다",
      pastParticiple: "맞는 상태 / 맞춰진 상태"
    }
  },
  {
    present: "fly",
    past: "flew",
    pastParticiple: "flown",
    meaning: {
      present: "날다",
      past: "날았다",
      pastParticiple: "날아간 상태"
    }
  },
  {
    present: "forget",
    past: "forgot",
    pastParticiple: "forgotten",
    meaning: {
      present: "잊다",
      past: "잊었다",
      pastParticiple: "잊힌 상태"
    }
  },
  {
    present: "forgive",
    past: "forgave",
    pastParticiple: "forgiven",
    meaning: {
      present: "용서하다",
      past: "용서했다",
      pastParticiple: "용서된 상태"
    }
  },
  {
    present: "freeze",
    past: "froze",
    pastParticiple: "frozen",
    meaning: {
      present: "얼다 / 얼리다",
      past: "얼었다 / 얼렸다",
      pastParticiple: "얼어붙은 상태"
    }
  },
  {
    present: "get",
    past: "got",
    pastParticiple: "gotten",
    meaning: {
      present: "얻다 / 가지게 되다",
      past: "얻었다 / 가지게 되었다",
      pastParticiple: "얻어진 상태 / 가지게 된 상태"
    }
  },
  {
    present: "give",
    past: "gave",
    pastParticiple: "given",
    meaning: {
      present: "주다",
      past: "주었다",
      pastParticiple: "주어진 상태"
    }
  },
  {
    present: "grow",
    past: "grew",
    pastParticiple: "grown",
    meaning: {
      present: "자라다 / 키우다",
      past: "자랐다 / 키웠다",
      pastParticiple: "자란 상태 / 길러진 상태"
    }
  },
  {
    present: "hang",
    past: "hung",
    pastParticiple: "hung",
    meaning: {
      present: "걸다 / 매달다",
      past: "걸었다 / 매달았다",
      pastParticiple: "걸린 상태 / 매달린 상태"
    }
  },
  {
    present: "have",
    past: "had",
    pastParticiple: "had",
    meaning: {
      present: "가지다",
      past: "가졌다",
      pastParticiple: "가진 상태"
    }
  },
  {
    present: "hear",
    past: "heard",
    pastParticiple: "heard",
    meaning: {
      present: "듣다",
      past: "들었다",
      pastParticiple: "들은 상태"
    }
  },
  {
    present: "hide",
    past: "hid",
    pastParticiple: "hidden",
    meaning: {
      present: "숨기다 / 숨다",
      past: "숨겼다 / 숨었다",
      pastParticiple: "숨겨진 상태"
    }
  },
  {
    present: "hit",
    past: "hit",
    pastParticiple: "hit",
    meaning: {
      present: "치다",
      past: "쳤다",
      pastParticiple: "맞은 상태 / 쳐진 상태"
    }
  },
  {
    present: "hold",
    past: "held",
    pastParticiple: "held",
    meaning: {
      present: "잡다 / 쥐다",
      past: "잡았다 / 쥐었다",
      pastParticiple: "쥔 상태 / 유지된 상태"
    }
  },
  {
    present: "hurt",
    past: "hurt",
    pastParticiple: "hurt",
    meaning: {
      present: "다치게 하다 / 아프게 하다",
      past: "다치게 했다 / 아프게 했다",
      pastParticiple: "다친 상태 / 상처 입은 상태"
    }
  },
  {
    present: "keep",
    past: "kept",
    pastParticiple: "kept",
    meaning: {
      present: "유지하다 / 보관하다",
      past: "유지했다 / 보관했다",
      pastParticiple: "유지된 상태 / 보관된 상태"
    }
  },
  {
    present: "know",
    past: "knew",
    pastParticiple: "known",
    meaning: {
      present: "알다",
      past: "알았다",
      pastParticiple: "알려진 상태 / 알고 있는 상태"
    }
  },
  {
    present: "lay",
    past: "laid",
    pastParticiple: "laid",
    meaning: {
      present: "놓다 / 눕히다",
      past: "놓았다 / 눕혔다",
      pastParticiple: "놓인 상태 / 눕혀진 상태"
    }
  },
  {
    present: "lead",
    past: "led",
    pastParticiple: "led",
    meaning: {
      present: "이끌다",
      past: "이끌었다",
      pastParticiple: "이끌어진 상태"
    }
  },
  {
    present: "leave",
    past: "left",
    pastParticiple: "left",
    meaning: {
      present: "떠나다 / 남기다",
      past: "떠났다 / 남겼다",
      pastParticiple: "떠난 상태 / 남겨진 상태"
    }
  },
  {
    present: "lend",
    past: "lent",
    pastParticiple: "lent",
    meaning: {
      present: "빌려주다",
      past: "빌려주었다",
      pastParticiple: "빌려준 상태"
    }
  },
  {
    present: "let",
    past: "let",
    pastParticiple: "let",
    meaning: {
      present: "~하게 하다 / 허락하다",
      past: "~하게 했다 / 허락했다",
      pastParticiple: "허락된 상태"
    }
  },
  {
    present: "light",
    past: "lit",
    pastParticiple: "lit",
    meaning: {
      present: "불을 붙이다 / 밝히다",
      past: "불을 붙였다 / 밝혔다",
      pastParticiple: "불이 붙은 상태 / 밝혀진 상태"
    }
  },
  {
    present: "lose",
    past: "lost",
    pastParticiple: "lost",
    meaning: {
      present: "잃다",
      past: "잃었다",
      pastParticiple: "잃어버린 상태"
    }
  },
  {
    present: "make",
    past: "made",
    pastParticiple: "made",
    meaning: {
      present: "만들다",
      past: "만들었다",
      pastParticiple: "만들어진 상태"
    }
  },
  {
    present: "mean",
    past: "meant",
    pastParticiple: "meant",
    meaning: {
      present: "의미하다",
      past: "의미했다",
      pastParticiple: "의도된 상태 / 의미된 상태"
    }
  },
  {
    present: "meet",
    past: "met",
    pastParticiple: "met",
    meaning: {
      present: "만나다",
      past: "만났다",
      pastParticiple: "만난 상태"
    }
  },
  {
    present: "pay",
    past: "paid",
    pastParticiple: "paid",
    meaning: {
      present: "지불하다",
      past: "지불했다",
      pastParticiple: "지불된 상태"
    }
  },
  {
    present: "put",
    past: "put",
    pastParticiple: "put",
    meaning: {
      present: "놓다 / 두다",
      past: "놓았다 / 두었다",
      pastParticiple: "놓인 상태 / 두어진 상태"
    }
  },
  {
    present: "quit",
    past: "quit",
    pastParticiple: "quit",
    meaning: {
      present: "그만두다",
      past: "그만두었다",
      pastParticiple: "그만둔 상태"
    }
  },
  {
    present: "read",
    past: "read",
    pastParticiple: "read",
    meaning: {
      present: "읽다",
      past: "읽었다",
      pastParticiple: "읽은 상태"
    }
  },
  {
    present: "ride",
    past: "rode",
    pastParticiple: "ridden",
    meaning: {
      present: "타다",
      past: "탔다",
      pastParticiple: "탄 상태"
    }
  },
  {
    present: "ring",
    past: "rang",
    pastParticiple: "rung",
    meaning: {
      present: "울리다 / 전화하다",
      past: "울렸다 / 전화했다",
      pastParticiple: "울린 상태"
    }
  },
  {
    present: "rise",
    past: "rose",
    pastParticiple: "risen",
    meaning: {
      present: "오르다 / 일어나다",
      past: "올랐다 / 일어났다",
      pastParticiple: "오른 상태 / 일어난 상태"
    }
  },
  {
    present: "run",
    past: "ran",
    pastParticiple: "run",
    meaning: {
      present: "달리다",
      past: "달렸다",
      pastParticiple: "달린 상태 / 운영된 상태"
    }
  },
  {
    present: "say",
    past: "said",
    pastParticiple: "said",
    meaning: {
      present: "말하다",
      past: "말했다",
      pastParticiple: "말해진 상태"
    }
  },
  {
    present: "sell",
    past: "sold",
    pastParticiple: "sold",
    meaning: {
      present: "팔다",
      past: "팔았다",
      pastParticiple: "팔린 상태"
    }
  },
  {
    present: "send",
    past: "sent",
    pastParticiple: "sent",
    meaning: {
      present: "보내다",
      past: "보냈다",
      pastParticiple: "보내진 상태"
    }
  },
  {
    present: "set",
    past: "set",
    pastParticiple: "set",
    meaning: {
      present: "설정하다 / 두다",
      past: "설정했다 / 두었다",
      pastParticiple: "설정된 상태"
    }
  },
  {
    present: "shake",
    past: "shook",
    pastParticiple: "shaken",
    meaning: {
      present: "흔들다",
      past: "흔들었다",
      pastParticiple: "흔들린 상태"
    }
  },
  {
    present: "shoot",
    past: "shot",
    pastParticiple: "shot",
    meaning: {
      present: "쏘다 / 촬영하다",
      past: "쐈다 / 촬영했다",
      pastParticiple: "쏘아진 상태 / 촬영된 상태"
    }
  },
  {
    present: "shut",
    past: "shut",
    pastParticiple: "shut",
    meaning: {
      present: "닫다",
      past: "닫았다",
      pastParticiple: "닫힌 상태"
    }
  },
  {
    present: "sing",
    past: "sang",
    pastParticiple: "sung",
    meaning: {
      present: "노래하다",
      past: "노래했다",
      pastParticiple: "불린 상태 / 노래한 상태"
    }
  },
  {
    present: "sit",
    past: "sat",
    pastParticiple: "sat",
    meaning: {
      present: "앉다",
      past: "앉았다",
      pastParticiple: "앉아 있는 상태"
    }
  },
  {
    present: "sleep",
    past: "slept",
    pastParticiple: "slept",
    meaning: {
      present: "자다",
      past: "잤다",
      pastParticiple: "잔 상태"
    }
  },
  {
    present: "slide",
    past: "slid",
    pastParticiple: "slid",
    meaning: {
      present: "미끄러지다 / 미끄러뜨리다",
      past: "미끄러졌다 / 미끄러뜨렸다",
      pastParticiple: "미끄러진 상태"
    }
  },
  {
    present: "spend",
    past: "spent",
    pastParticiple: "spent",
    meaning: {
      present: "쓰다 / 소비하다",
      past: "썼다 / 소비했다",
      pastParticiple: "소비된 상태 / 보낸 상태"
    }
  },
  {
    present: "spread",
    past: "spread",
    pastParticiple: "spread",
    meaning: {
      present: "퍼뜨리다 / 펼치다",
      past: "퍼뜨렸다 / 펼쳤다",
      pastParticiple: "퍼진 상태 / 펼쳐진 상태"
    }
  },
  {
    present: "stand",
    past: "stood",
    pastParticiple: "stood",
    meaning: {
      present: "서다",
      past: "섰다",
      pastParticiple: "서 있는 상태"
    }
  },
  {
    present: "steal",
    past: "stole",
    pastParticiple: "stolen",
    meaning: {
      present: "훔치다",
      past: "훔쳤다",
      pastParticiple: "도난당한 상태 / 훔친 상태"
    }
  },
  {
    present: "stick",
    past: "stuck",
    pastParticiple: "stuck",
    meaning: {
      present: "붙이다 / 달라붙다",
      past: "붙였다 / 달라붙었다",
      pastParticiple: "붙은 상태"
    }
  },
  {
    present: "strike",
    past: "struck",
    pastParticiple: "struck",
    meaning: {
      present: "치다 / 파업하다",
      past: "쳤다 / 파업했다",
      pastParticiple: "맞은 상태 / 타격된 상태"
    }
  },
  {
    present: "swear",
    past: "swore",
    pastParticiple: "sworn",
    meaning: {
      present: "맹세하다",
      past: "맹세했다",
      pastParticiple: "맹세한 상태"
    }
  },
  {
    present: "sweep",
    past: "swept",
    pastParticiple: "swept",
    meaning: {
      present: "쓸다",
      past: "쓸었다",
      pastParticiple: "쓸린 상태 / 쓸어낸 상태"
    }
  },
  {
    present: "swim",
    past: "swam",
    pastParticiple: "swum",
    meaning: {
      present: "수영하다",
      past: "수영했다",
      pastParticiple: "헤엄친 상태"
    }
  },
  {
    present: "teach",
    past: "taught",
    pastParticiple: "taught",
    meaning: {
      present: "가르치다",
      past: "가르쳤다",
      pastParticiple: "가르쳐진 상태"
    }
  },
  {
    present: "tear",
    past: "tore",
    pastParticiple: "torn",
    meaning: {
      present: "찢다",
      past: "찢었다",
      pastParticiple: "찢어진 상태"
    }
  },
  {
    present: "tell",
    past: "told",
    pastParticiple: "told",
    meaning: {
      present: "말하다 / 알려주다",
      past: "말했다 / 알려주었다",
      pastParticiple: "말해진 상태 / 알려진 상태"
    }
  },
  {
    present: "think",
    past: "thought",
    pastParticiple: "thought",
    meaning: {
      present: "생각하다",
      past: "생각했다",
      pastParticiple: "생각된 상태"
    }
  },
  {
    present: "throw",
    past: "threw",
    pastParticiple: "thrown",
    meaning: {
      present: "던지다",
      past: "던졌다",
      pastParticiple: "던져진 상태"
    }
  },
  {
    present: "understand",
    past: "understood",
    pastParticiple: "understood",
    meaning: {
      present: "이해하다",
      past: "이해했다",
      pastParticiple: "이해된 상태"
    }
  },
  {
    present: "upset",
    past: "upset",
    pastParticiple: "upset",
    meaning: {
      present: "속상하게 하다 / 뒤엎다",
      past: "속상하게 했다 / 뒤엎었다",
      pastParticiple: "속상해진 상태 / 뒤집힌 상태"
    }
  },
  {
    present: "wake",
    past: "woke",
    pastParticiple: "woken",
    meaning: {
      present: "깨다 / 깨우다",
      past: "깼다 / 깨웠다",
      pastParticiple: "깨어난 상태 / 깨워진 상태"
    }
  },
  {
    present: "wear",
    past: "wore",
    pastParticiple: "worn",
    meaning: {
      present: "입다 / 착용하다",
      past: "입었다 / 착용했다",
      pastParticiple: "입은 상태 / 닳은 상태"
    }
  },
  {
    present: "win",
    past: "won",
    pastParticiple: "won",
    meaning: {
      present: "이기다 / 얻다",
      past: "이겼다 / 얻었다",
      pastParticiple: "이긴 상태 / 획득한 상태"
    }
  },
  {
    present: "wind",
    past: "wound",
    pastParticiple: "wound",
    meaning: {
      present: "감다 / 둘러 감다",
      past: "감았다 / 둘러 감았다",
      pastParticiple: "감긴 상태"
    }
  },
  {
    present: "withdraw",
    past: "withdrew",
    pastParticiple: "withdrawn",
    meaning: {
      present: "철회하다 / 인출하다",
      past: "철회했다 / 인출했다",
      pastParticiple: "철회된 상태 / 인출된 상태"
    }
  }
];
