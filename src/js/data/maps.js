dataSetVersion = "2021-01-08"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Class",
    key: "class",
    tooltip: "Check this to filter maps by class.",
    checked: false,
    sub: [
      { name: "Soldier", key: "soldier" },
      { name: "Demoman", key: "demo" },
    ]
  },
  {
    name: "Filter by Tier",
    key: "tier",
    tooltip: "Check this to filter maps by their tier.",
    checked: false,
    sub: [
      { name: "Tier 0", tooltip: "Impossible", key: "t0" },
      { name: "Tier 1", tooltip: "Very Easy", key: "t1" },
      { name: "Tier 2", tooltip: "Easy", key: "t2" },
      { name: "Tier 3", tooltip: "Medium", key: "t3" },
      { name: "Tier 4", tooltip: "Hard", key: "t4" },
      { name: "Tier 5", tooltip: "Very Hard", key: "t5" },
      { name: "Tier 6", tooltip: "Insane", key: "t6" }
    ]
  },
  {
    name: "Filter by Linear/Course Maps",
    key: "hascourses",
    checked: false,
    tooltip: "If checked, only shows maps that have courses. NOTE: This filter is not functional yet!"
  },
  {
    name: "Remove gimmick maps",
    key: "hasgimmick",
    checked: false,
    tooltip: "If checked, removes maps that have gimmicks. NOTE: This filter is not functional yet!"
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "jump_4dakids_final",
    img: "jump_4dakids_final_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_4demo_fixed5",
    img: "jump_4demo_fixed5_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_4starters_rc1",
    img: "jump_4starters_rc1_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_aando_b1_tmps",
    img: "jump_aando_b1_tmps_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_abandon",
    img: "jump_abandon_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_ablation_b4",
    img: "jump_ablation_b4_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_above_rc1",
    img: "jump_above_rc1_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_abuq",
    img: "jump_abuq_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_abyss_rc2",
    img: "jump_abyss_rc2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_acepogo",
    img: "jump_acepogo_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_adventure",
    img: "jump_adventure_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_aggregate_zip",
    img: "jump_aggregate_zip_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_aigis_a4",
    img: "jump_aigis_a4_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_air",
    img: "jump_air_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_airshift_a4",
    img: "jump_airshift_a4_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_airships_v2",
    img: "jump_airships_v2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_allstars",
    img: "jump_allstars_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_amazon_b1",
    img: "jump_amazon_b1_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_annex_v5",
    img: "jump_annex_v5_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_ante",
    img: "jump_ante_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_antiquity",
    img: "jump_antiquity_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_apex_b1",
    img: "jump_apex_b1_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_aqua",
    img: "jump_aqua_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_arc_b1_tmps",
    img: "jump_arc_b1_tmps_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_arctic_a2",
    img: "jump_arctic_a2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_aridia",
    img: "jump_aridia_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_aris_a3",
    img: "jump_aris_a3_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_ariser_fix",
    img: "jump_ariser_fix_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_armaldo",
    img: "jump_armaldo_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_armature_final_zip",
    img: "jump_armature_final_zip_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_around_cr",
    img: "jump_around_cr_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_artificial_a13",
    img: "jump_artificial_a13_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_arugula_b4",
    img: "jump_arugula_b4_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_ascent_final",
    img: "jump_ascent_final_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_asdf",
    img: "jump_asdf_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_asshole_a3",
    img: "jump_asshole_a3_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_ataronchronon_b2",
    img: "jump_ataronchronon_b2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_aten_test",
    img: "jump_aten_test_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_attached2_rcx",
    img: "jump_attached2_rcx_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_attached_b2",
    img: "jump_attached_b2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_aura_b4",
    img: "jump_aura_b4_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_aurora_v2",
    img: "jump_aurora_v2_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_autumn_rc3",
    img: "jump_autumn_rc3_128.jpeg",
    opts: {
      class: ["soldier, demo"],
      tier: ["t2, t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_aviator",
    img: "jump_aviator_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_ayers2_a8_zip",
    img: "jump_ayers2_a8_zip_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_ayers_v2",
    img: "jump_ayers_v2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_aznbob_fixed",
    img: "jump_aznbob_fixed_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_azure_v2",
    img: "jump_azure_v2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_babylon",
    img: "jump_babylon_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_ballin_a3",
    img: "jump_ballin_a3_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_banane",
    img: "jump_banane_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_bangarang",
    img: "jump_bangarang_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_baqu_a2",
    img: "jump_baqu_a2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_bear",
    img: "jump_bear_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_beef",
    img: "jump_beef_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_beefmas",
    img: "jump_beefmas_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_benny",
    img: "jump_benny_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_benroads2_a3",
    img: "jump_benroads2_a3_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_benroads_a5",
    img: "jump_benroads_a5_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_beyond_b3",
    img: "jump_beyond_b3_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_bigbutt_b1",
    img: "jump_bigbutt_b1_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_biome",
    img: "jump_biome_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_blables_b2",
    img: "jump_blables_b2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_blackout_a2",
    img: "jump_blackout_a2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_blossom_s3f_fix2",
    img: "jump_blossom_s3f_fix2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_blueberry_b3",
    img: "jump_blueberry_b3_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_bob_fixed",
    img: "jump_bob_fixed_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_bojack_v2",
    img: "jump_bojack_v2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_bomb",
    img: "jump_bomb_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_bongwater",
    img: "jump_bongwater_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_bonus",
    img: "jump_bonus_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_boredfox2_b1",
    img: "jump_boredfox2_b1_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_boredfox_b1",
    img: "jump_boredfox_b1_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_boredgorge",
    img: "jump_boredgorge_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_bounce",
    img: "jump_bounce_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_bouncehop",
    img: "jump_bouncehop_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_bouncerific_v2",
    img: "jump_bouncerific_v2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_broccoli",
    img: "jump_broccoli_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_bunker_final",
    img: "jump_bunker_final_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_butter",
    img: "jump_butter_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_buttered_b2",
    img: "jump_buttered_b2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_cake",
    img: "jump_cake_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_camp_rc2",
    img: "jump_camp_rc2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_canyon_b1",
    img: "jump_canyon_b1_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_carrot_a5",
    img: "jump_carrot_a5_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_catch_final",
    img: "jump_catch_final_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_cavern_final",
    img: "jump_cavern_final_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_cetalu_rc1",
    img: "jump_cetalu_rc1_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_chambers_v2",
    img: "jump_chambers_v2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_cheval",
    img: "jump_cheval_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_christmas_zip",
    img: "jump_christmas_zip_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_claustro_final",
    img: "jump_claustro_final_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_claustro_v2",
    img: "jump_claustro_v2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_collab",
    img: "jump_collab_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_competitive_b2",
    img: "jump_competitive_b2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_composite",
    img: "jump_composite_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_compound",
    img: "jump_compound_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_concept_a5",
    img: "jump_concept_a5_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_contact",
    img: "jump_contact_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_cool_b2",
    img: "jump_cool_b2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_core_b1_zip",
    img: "jump_core_b1_zip_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_cow",
    img: "jump_cow_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_craze",
    img: "jump_craze_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_crunch",
    img: "jump_crunch_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_crypt",
    img: "jump_crypt_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_cube_b4",
    img: "jump_cube_b4_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_cubic_zip",
    img: "jump_cubic_zip_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_dad",
    img: "jump_dad_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_dahl",
    img: "jump_dahl_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_damer_rc6",
    img: "jump_damer_rc6_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_dan2",
    img: "jump_dan2_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_dang",
    img: "jump_dang_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_dang_r",
    img: "jump_dang_r_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_data_final",
    img: "jump_data_final_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_daylight_a2",
    img: "jump_daylight_a2_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_ddpls",
    img: "jump_ddpls_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_demolition",
    img: "jump_demolition_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_demonstrationman_a4",
    img: "jump_demonstrationman_a4_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_depleted",
    img: "jump_depleted_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_desa_rc2",
    img: "jump_desa_rc2_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_descent_v5",
    img: "jump_descent_v5_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_deserted_b1",
    img: "jump_deserted_b1_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_destination",
    img: "jump_destination_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_destination_v2",
    img: "jump_destination_v2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_devils_redo",
    img: "jump_devils_redo_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_diabarha_b2",
    img: "jump_diabarha_b2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_diirtyxweezy_a1",
    img: "jump_diirtyxweezy_a1_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_dink_b2",
    img: "jump_dink_b2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_doodle_b9",
    img: "jump_doodle_b9_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_dread_a3",
    img: "jump_dread_a3_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_dreamier",
    img: "jump_dreamier_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_dreamy_final",
    img: "jump_dreamy_final_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_drenched",
    img: "jump_drenched_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_drexen",
    img: "jump_drexen_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_drexen2",
    img: "jump_drexen2_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_drheinz",
    img: "jump_drheinz_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_drought_b1",
    img: "jump_drought_b1_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_duality_tpn",
    img: "jump_duality_tpn_128.jpeg",
    opts: {
      class: ["soldier, demo"],
      tier: ["t3, t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_duey_v2",
    img: "jump_duey_v2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_dystopia",
    img: "jump_dystopia_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_edgebug_b2",
    img: "jump_edgebug_b2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_egyptian_b2",
    img: "jump_egyptian_b2_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_einfache_b1",
    img: "jump_einfache_b1_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_elephant_a2",
    img: "jump_elephant_a2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_elite",
    img: "jump_elite_128.jpeg",
    opts: {
      class: ["soldier, demo"],
      tier: ["t5, t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_elysium_fn",
    img: "jump_elysium_fn_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_embrace",
    img: "jump_embrace_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_endurance_rc2",
    img: "jump_endurance_rc2_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_eons_b2",
    img: "jump_eons_b2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_esri",
    img: "jump_esri_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_evac_a3",
    img: "jump_evac_a3_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_everest_a3",
    img: "jump_everest_a3_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_excavation_final",
    img: "jump_excavation_final_128.jpeg",
    opts: {
      class: ["soldier, demo"],
      tier: ["t2, t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_exile_v3",
    img: "jump_exile_v3_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_exilenpals",
    img: "jump_exilenpals_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_ezekiel_beta3",
    img: "jump_ezekiel_beta3_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_ezpz_v4",
    img: "jump_ezpz_v4_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_facility",
    img: "jump_facility_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_fart2_final",
    img: "jump_fart2_final_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_fart_final",
    img: "jump_fart_final_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_fastnfar_b1",
    img: "jump_fastnfar_b1_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_fauvism_a2",
    img: "jump_fauvism_a2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_fear_redo",
    img: "jump_fear_redo_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_festivus",
    img: "jump_festivus_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_fifth",
    img: "jump_fifth_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_finite_v2",
    img: "jump_finite_v2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_fisyx",
    img: "jump_fisyx_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_fizzydrink_a2",
    img: "jump_fizzydrink_a2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_flashblack",
    img: "jump_flashblack_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_flow_redo",
    img: "jump_flow_redo_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_flukhtiz_v2_b2",
    img: "jump_flukhtiz_v2_b2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_flux",
    img: "jump_flux_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_foss",
    img: "jump_foss_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_foundation_a2",
    img: "jump_foundation_a2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_fox",
    img: "jump_fox_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_frayb_a4",
    img: "jump_frayb_a4_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_free_b2",
    img: "jump_free_b2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_freezeflame_easy",
    img: "jump_freezeflame_easy_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t1"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_frost_a1",
    img: "jump_frost_a1_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_future_rebuild",
    img: "jump_future_rebuild_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_gateway_final",
    img: "jump_gateway_final_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_gaylord",
    img: "jump_gaylord_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_gaylord2",
    img: "jump_gaylord2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_glassydev_final",
    img: "jump_glassydev_final_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_glassydev_rc3",
    img: "jump_glassydev_rc3_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_glow_v4",
    img: "jump_glow_v4_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_gman_beta_4",
    img: "jump_gman_beta_4_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_gr8_wite_final",
    img: "jump_gr8_wite_final_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_grape_final",
    img: "jump_grape_final_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_grimace",
    img: "jump_grimace_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_grotto_rc2",
    img: "jump_grotto_rc2_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_hajnal_finalbeta",
    img: "jump_hajnal_finalbeta_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_half",
    img: "jump_half_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_hana",
    img: "jump_hana_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_hanami_final_v2",
    img: "jump_hanami_final_v2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_hangar_18",
    img: "jump_hangar_18_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_happygonk_b7",
    img: "jump_happygonk_b7_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_hardware",
    img: "jump_hardware_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_heaven_a3",
    img: "jump_heaven_a3_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_heavy_b1",
    img: "jump_heavy_b1_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_heck",
    img: "jump_heck_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_hexahedron",
    img: "jump_hexahedron_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_hobo",
    img: "jump_hobo_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_hobo2_fixed",
    img: "jump_hobo2_fixed_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_hoi",
    img: "jump_hoi_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_home_v2",
    img: "jump_home_v2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_homie_beta",
    img: "jump_homie_beta_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_hopstep_a3",
    img: "jump_hopstep_a3_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_horus_b5_tpn",
    img: "jump_horus_b5_tpn_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_hotcoffee_b1",
    img: "jump_hotcoffee_b1_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_housebeta",
    img: "jump_housebeta_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_how",
    img: "jump_how_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_huh_b6",
    img: "jump_huh_b6_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_hydrogen_rc1_bmv",
    img: "jump_hydrogen_rc1_bmv_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_ice_v4",
    img: "jump_ice_v4_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_illusion_final",
    img: "jump_illusion_final_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_impact",
    img: "jump_impact_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_impulse_a2",
    img: "jump_impulse_a2_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_internal_b4",
    img: "jump_internal_b4_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_isak_b4",
    img: "jump_isak_b4_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_iser_a3",
    img: "jump_iser_a3_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_it_final",
    img: "jump_it_final_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_jabroni",
    img: "jump_jabroni_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_jakey_a2",
    img: "jump_jakey_a2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_jasmine",
    img: "jump_jasmine_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_joa_v2",
    img: "jump_joa_v2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_jorgelayja_tmps",
    img: "jump_jorgelayja_tmps_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_jormp",
    img: "jump_jormp_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_junk_solly_b1",
    img: "jump_junk_solly_b1_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_jurf2_a1",
    img: "jump_jurf2_a1_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_jurf_a2",
    img: "jump_jurf_a2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_karb_b3",
    img: "jump_karb_b3_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_karelia_b1",
    img: "jump_karelia_b1_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_kek2_rc2",
    img: "jump_kek2_rc2_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_kek_final3",
    img: "jump_kek_final3_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_keratotomy_b8",
    img: "jump_keratotomy_b8_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_khoa",
    img: "jump_khoa_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_kilo",
    img: "jump_kilo_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_kin",
    img: "jump_kin_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_kinetics_c1",
    img: "jump_kinetics_c1_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_klanana",
    img: "jump_klanana_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_knight_final",
    img: "jump_knight_final_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_koi",
    img: "jump_koi_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_koro_b2",
    img: "jump_koro_b2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_kpop_a3",
    img: "jump_kpop_a3_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_krakatoa_final",
    img: "jump_krakatoa_final_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_kumo",
    img: "jump_kumo_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_kuna",
    img: "jump_kuna_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_kusok",
    img: "jump_kusok_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_lanc_v3",
    img: "jump_lanc_v3_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_lathy_final",
    img: "jump_lathy_final_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_legion_beta3",
    img: "jump_legion_beta3_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_linear_final_fix",
    img: "jump_linear_final_fix_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_lion_a6",
    img: "jump_lion_a6_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_lite_a0",
    img: "jump_lite_a0_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_lithium_fix2_bmv",
    img: "jump_lithium_fix2_bmv_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_littleman_v4",
    img: "jump_littleman_v4_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_lolparty",
    img: "jump_lolparty_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_lost_a6",
    img: "jump_lost_a6_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_lotus_fix",
    img: "jump_lotus_fix_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_m0nkey_a5",
    img: "jump_m0nkey_a5_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_m0rg_a2",
    img: "jump_m0rg_a2_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_mad_rc3",
    img: "jump_mad_rc3_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_majoras_a3",
    img: "jump_majoras_a3_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_manifestation_fix",
    img: "jump_manifestation_fix_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_manitou",
    img: "jump_manitou_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_mario_beta1_zip",
    img: "jump_mario_beta1_zip_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_maso",
    img: "jump_maso_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_mirage",
    img: "jump_mirage_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_mire",
    img: "jump_mire_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_mireal2_final",
    img: "jump_mireal2_final_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_mireal3_final",
    img: "jump_mireal3_final_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_mireal_tpn",
    img: "jump_mireal_tpn_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_mirrorsedge_rc2",
    img: "jump_mirrorsedge_rc2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_mohaxish_rc2",
    img: "jump_mohaxish_rc2_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_mohr",
    img: "jump_mohr_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_moist_v2_fix",
    img: "jump_moist_v2_fix_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_momentum",
    img: "jump_momentum_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_moo",
    img: "jump_moo_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_moria_b6",
    img: "jump_moria_b6_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_mouser",
    img: "jump_mouser_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_muffin_b4",
    img: "jump_muffin_b4_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_natural_b2",
    img: "jump_natural_b2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_nbn_b4b_redo_a1",
    img: "jump_nbn_b4b_redo_a1_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_nebuchadnezzar_final",
    img: "jump_nebuchadnezzar_final_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_negative_b5",
    img: "jump_negative_b5_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_nepal_rc4",
    img: "jump_nepal_rc4_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_neptune_rc1",
    img: "jump_neptune_rc1_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_network_b1",
    img: "jump_network_b1_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_nevar_a1",
    img: "jump_nevar_a1_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_nights",
    img: "jump_nights_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_nincompoop_final",
    img: "jump_nincompoop_final_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_ninjacookie_final",
    img: "jump_ninjacookie_final_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_nmotion2",
    img: "jump_nmotion2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_nmotion_v8",
    img: "jump_nmotion_v8_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_noob",
    img: "jump_noob_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_noob2_ab",
    img: "jump_noob2_ab_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_noskillrequired_b3",
    img: "jump_noskillrequired_b3_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_nuttwo_final",
    img: "jump_nuttwo_final_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_oats_b3",
    img: "jump_oats_b3_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_obelisk_rc1_zip",
    img: "jump_obelisk_rc1_zip_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_ofc_v2",
    img: "jump_ofc_v2_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_ofcourse_redo_final",
    img: "jump_ofcourse_redo_final_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_ofthehats_zip",
    img: "jump_ofthehats_zip_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_omega",
    img: "jump_omega_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_omega2_final",
    img: "jump_omega2_final_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_onion_v2",
    img: "jump_onion_v2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_onit_b4",
    img: "jump_onit_b4_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_ontra",
    img: "jump_ontra_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_orange_v2",
    img: "jump_orange_v2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_orbital_rc1_zip",
    img: "jump_orbital_rc1_zip_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_oreotachi_b3",
    img: "jump_oreotachi_b3_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_oreotopolis_c7",
    img: "jump_oreotopolis_c7_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_oretachi_rc5",
    img: "jump_oretachi_rc5_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_ouryoku",
    img: "jump_ouryoku_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_over_beta",
    img: "jump_over_beta_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_overhead",
    img: "jump_overhead_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_owakare",
    img: "jump_owakare_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_p",
    img: "jump_p_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_pagoda",
    img: "jump_pagoda_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_panama",
    img: "jump_panama_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_pandemonium",
    img: "jump_pandemonium_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_pants_b2",
    img: "jump_pants_b2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_pastel_b2",
    img: "jump_pastel_b2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_pathos",
    img: "jump_pathos_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_pdidey",
    img: "jump_pdidey_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_pharaoh_a6",
    img: "jump_pharaoh_a6_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_phase_b4",
    img: "jump_phase_b4_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_phobos_zip",
    img: "jump_phobos_zip_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_pickles_v2",
    img: "jump_pickles_v2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_pine_b1",
    img: "jump_pine_b1_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_pmuj_rc2",
    img: "jump_pmuj_rc2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_polar",
    img: "jump_polar_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_prism_final",
    img: "jump_prism_final_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_propel_fixed_v3",
    img: "jump_propel_fixed_v3_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_prostate_b3",
    img: "jump_prostate_b3_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_prostate_b4",
    img: "jump_prostate_b4_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_protactinium",
    img: "jump_protactinium_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_proto_a2",
    img: "jump_proto_a2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_psionic",
    img: "jump_psionic_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_psycho_zip",
    img: "jump_psycho_zip_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_pump",
    img: "jump_pump_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_puni_a4a",
    img: "jump_puni_a4a_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_pure_b2",
    img: "jump_pure_b2_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_purecio_b2",
    img: "jump_purecio_b2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_qodu_rc1",
    img: "jump_qodu_rc1_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_quake_beta4",
    img: "jump_quake_beta4_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_quattro_rc1",
    img: "jump_quattro_rc1_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_quba",
    img: "jump_quba_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_quick_b2",
    img: "jump_quick_b2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_quickers_b3",
    img: "jump_quickers_b3_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_raina",
    img: "jump_raina_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_rainbow",
    img: "jump_rainbow_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_rapture",
    img: "jump_rapture_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_raven_b1",
    img: "jump_raven_b1_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_rayner_a1_fixed",
    img: "jump_rayner_a1_fixed_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_rebound_v3",
    img: "jump_rebound_v3_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_rebus",
    img: "jump_rebus_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_recall",
    img: "jump_recall_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_redplanet_v2",
    img: "jump_redplanet_v2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_rehorus_final2",
    img: "jump_rehorus_final2_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_remember_beta",
    img: "jump_remember_beta_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_renard",
    img: "jump_renard_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_requiem_a6",
    img: "jump_requiem_a6_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_resi_b2",
    img: "jump_resi_b2_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_revenge",
    img: "jump_revenge_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_rewind",
    img: "jump_rewind_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_rewind2",
    img: "jump_rewind2_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_ring2",
    img: "jump_ring2_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_ring_final",
    img: "jump_ring_final_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_rnc_a1",
    img: "jump_rnc_a1_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_rook_beta",
    img: "jump_rook_beta_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_rope_final",
    img: "jump_rope_final_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_rush",
    img: "jump_rush_128.jpeg",
    opts: {
      class: ["soldier, demo"],
      tier: ["t1, t1"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_rush_h",
    img: "jump_rush_h_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_rvr_b1",
    img: "jump_rvr_b1_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_samurai_b3",
    img: "jump_samurai_b3_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_sanctuary_final",
    img: "jump_sanctuary_final_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_schadenfreude_rc1",
    img: "jump_schadenfreude_rc1_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_scorpion_b1",
    img: "jump_scorpion_b1_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_sdm_final_zip",
    img: "jump_sdm_final_zip_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_serenity_rc3",
    img: "jump_serenity_rc3_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_serpentine_final",
    img: "jump_serpentine_final_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_seven",
    img: "jump_seven_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_sexydev_v3",
    img: "jump_sexydev_v3_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_sfw_final_zip",
    img: "jump_sfw_final_zip_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_sharp_b3",
    img: "jump_sharp_b3_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_shelter_b1",
    img: "jump_shelter_b1_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_shimano_a3",
    img: "jump_shimano_a3_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_shiver",
    img: "jump_shiver_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_shunix_v2",
    img: "jump_shunix_v2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_sick",
    img: "jump_sick_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_signal_final",
    img: "jump_signal_final_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_silly_a8",
    img: "jump_silly_a8_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_silly_fin",
    img: "jump_silly_fin_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_simplified_rc1",
    img: "jump_simplified_rc1_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_simply_v2",
    img: "jump_simply_v2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_sinister_final_ver2",
    img: "jump_sinister_final_ver2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_sink_b4",
    img: "jump_sink_b4_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_sira2",
    img: "jump_sira2_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_sira_alpha",
    img: "jump_sira_alpha_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_sitood_zip",
    img: "jump_sitood_zip_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_sketchy2_rc1_zip",
    img: "jump_sketchy2_rc1_zip_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_sketchy_final",
    img: "jump_sketchy_final_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_skip_b3",
    img: "jump_skip_b3_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_skylight",
    img: "jump_skylight_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_sleepy_redo",
    img: "jump_sleepy_redo_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_smarticlee",
    img: "jump_smarticlee_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_smellmybum",
    img: "jump_smellmybum_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_soar_a4",
    img: "jump_soar_a4_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_sobel",
    img: "jump_sobel_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_software",
    img: "jump_software_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_sohr_a5",
    img: "jump_sohr_a5_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_soma_a7",
    img: "jump_soma_a7_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_something_rc1_fix_v2",
    img: "jump_something_rc1_fix_v2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_sor_a4",
    img: "jump_sor_a4_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_sore_a4",
    img: "jump_sore_a4_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_sorh_a1",
    img: "jump_sorh_a1_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_spaghetti_v2",
    img: "jump_spaghetti_v2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_spark_rc2",
    img: "jump_spark_rc2_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_spectre",
    img: "jump_spectre_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_speed",
    img: "jump_speed_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_speed2",
    img: "jump_speed2_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_squared_b2",
    img: "jump_squared_b2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_starkie_tpn",
    img: "jump_starkie_tpn_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_start_b4",
    img: "jump_start_b4_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_start_h",
    img: "jump_start_h_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_starve",
    img: "jump_starve_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_steak_a2",
    img: "jump_steak_a2_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_steel_b1",
    img: "jump_steel_b1_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_stella_v2",
    img: "jump_stella_v2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_stleganickling_v1",
    img: "jump_stleganickling_v1_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_storm_final",
    img: "jump_storm_final_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_straight",
    img: "jump_straight_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_stress_final",
    img: "jump_stress_final_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_stretch_final",
    img: "jump_stretch_final_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_strikapult_v11",
    img: "jump_strikapult_v11_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_strike_b2_tpn",
    img: "jump_strike_b2_tpn_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_stripe_b5",
    img: "jump_stripe_b5_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_style",
    img: "jump_style_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_summer_rc1",
    img: "jump_summer_rc1_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_super_v5",
    img: "jump_super_v5_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_supersereious_rc1",
    img: "jump_supersereious_rc1_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_surfzzz_v1",
    img: "jump_surfzzz_v1_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_sven_b1",
    img: "jump_sven_b1_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_sweetnawful_rc2",
    img: "jump_sweetnawful_rc2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_synapse_rc3_zip",
    img: "jump_synapse_rc3_zip_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_sync",
    img: "jump_sync_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_synth_a2",
    img: "jump_synth_a2_128.jpeg",
    opts: {
      class: ["soldier, demo"],
      tier: ["t4, t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_tapdance_fix3",
    img: "jump_tapdance_fix3_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_tawatyr",
    img: "jump_tawatyr_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_taylor_swift",
    img: "jump_taylor_swift_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_temple_final",
    img: "jump_temple_final_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_tensor_a2_zip",
    img: "jump_tensor_a2_zip_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_termywermy_beta4",
    img: "jump_termywermy_beta4_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_tesseract_fix_v2",
    img: "jump_tesseract_fix_v2_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_tf",
    img: "jump_tf_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_tf2rj",
    img: "jump_tf2rj_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_tholos",
    img: "jump_tholos_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_thorn_b5",
    img: "jump_thorn_b5_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_tissue",
    img: "jump_tissue_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_titan",
    img: "jump_titan_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_toot_rc4",
    img: "jump_toot_rc4_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_torii_v3",
    img: "jump_torii_v3_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_toxic_v6",
    img: "jump_toxic_v6_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_tpn_rc3",
    img: "jump_tpn_rc3_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_triplepre_b8",
    img: "jump_triplepre_b8_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_tsao_final",
    img: "jump_tsao_final_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_turnip_v2",
    img: "jump_turnip_v2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_tutankhamun",
    img: "jump_tutankhamun_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_twelve_rc1",
    img: "jump_twelve_rc1_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_twist_beta",
    img: "jump_twist_beta_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_twix_b4",
    img: "jump_twix_b4_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_tx_final",
    img: "jump_tx_final_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_typh_a3",
    img: "jump_typh_a3_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_ugly_b4",
    img: "jump_ugly_b4_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_ultimatebuttfucker_a2",
    img: "jump_ultimatebuttfucker_a2_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_ultra_alpha",
    img: "jump_ultra_alpha_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_underground_final",
    img: "jump_underground_final_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_undergrowth_zip",
    img: "jump_undergrowth_zip_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_underworld_final",
    img: "jump_underworld_final_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_underworld_v2_zip",
    img: "jump_underworld_v2_zip_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_up",
    img: "jump_up_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_urgent_final",
    img: "jump_urgent_final_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_valley_final",
    img: "jump_valley_final_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_vampires_v4",
    img: "jump_vampires_v4_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_vanilla",
    img: "jump_vanilla_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_vanished",
    img: "jump_vanished_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_vape_rc3",
    img: "jump_vape_rc3_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_vendetta",
    img: "jump_vendetta_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_vertigo",
    img: "jump_vertigo_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_vex_final",
    img: "jump_vex_final_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_void_b1",
    img: "jump_void_b1_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_volcanic_zip",
    img: "jump_volcanic_zip_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_vulc_a2",
    img: "jump_vulc_a2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_wallclimb_v1alpha",
    img: "jump_wallclimb_v1alpha_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_wallfox_rc1",
    img: "jump_wallfox_rc1_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_waves_final",
    img: "jump_waves_final_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_weekly_rc2",
    img: "jump_weekly_rc2_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_what",
    img: "jump_what_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_when_b2_fix",
    img: "jump_when_b2_fix_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_who",
    img: "jump_who_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_why_rc3",
    img: "jump_why_rc3_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_wolf",
    img: "jump_wolf_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_x",
    img: "jump_x_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_xhappy",
    img: "jump_xhappy_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_yona_b2",
    img: "jump_yona_b2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_yucca",
    img: "jump_yucca_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_yump_final1",
    img: "jump_yump_final1_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_ywumpy_final2",
    img: "jump_ywumpy_final2_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_zekro_v4",
    img: "jump_zekro_v4_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_zero",
    img: "jump_zero_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_zero_v2",
    img: "jump_zero_v2_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_zetsubou_v3",
    img: "jump_zetsubou_v3_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_ziggurat_b3_zip",
    img: "jump_ziggurat_b3_zip_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "rj_rckteer",
    img: "rj_rckteer_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "rj_rckteer_adv_v2",
    img: "rj_rckteer_adv_v2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "rj_training_v3",
    img: "rj_training_v3_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_chocological",
    img: "jump_chocological_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_beefoween_b1",
    img: "jump_beefoween_b1_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_treasure",
    img: "jump_treasure_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_revenant",
    img: "jump_revenant_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_lantern_tpn",
    img: "jump_lantern_tpn_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_pandemonium_v4",
    img: "jump_pandemonium_v4_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_plaza",
    img: "jump_plaza_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_byhicrine",
    img: "jump_byhicrine_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_rutabaga_rc2",
    img: "jump_rutabaga_rc2_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_omega3_jam_tf2",
    img: "jump_omega3_jam_tf2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_leicht_redo",
    img: "jump_leicht_redo_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_jorgelayja_redo",
    img: "jump_jorgelayja_redo_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_frost_redo_v2",
    img: "jump_frost_redo_v2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_estrogen_a4",
    img: "jump_estrogen_a4_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_bane",
    img: "jump_bane_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_4soldier_redo",
    img: "jump_4soldier_redo_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_luminous_rc5",
    img: "jump_luminous_rc5_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_bromelia_final",
    img: "jump_bromelia_final_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_mowi_rc2",
    img: "jump_mowi_rc2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_halcyon_b3",
    img: "jump_halcyon_b3_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_yggdrasil",
    img: "jump_yggdrasil_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_super_redo",
    img: "jump_super_redo_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_segment_rc3",
    img: "jump_segment_rc3_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_orestes",
    img: "jump_orestes_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_sylvan",
    img: "jump_sylvan_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_anxiety_a9",
    img: "jump_anxiety_a9_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_areae_b2",
    img: "jump_areae_b2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_auga_final",
    img: "jump_auga_final_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_benroads3",
    img: "jump_benroads3_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_bouncelicious",
    img: "jump_bouncelicious_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_chasm_final",
    img: "jump_chasm_final_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_codegreen_b4",
    img: "jump_codegreen_b4_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_concrete_rc1",
    img: "jump_concrete_rc1_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_echo",
    img: "jump_echo_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_eight_b5",
    img: "jump_eight_b5_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t1"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_evolved_final",
    img: "jump_evolved_final_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_forest_rc4",
    img: "jump_forest_rc4_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_garbage_a7",
    img: "jump_garbage_a7_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_geronimo",
    img: "jump_geronimo_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_keep_final",
    img: "jump_keep_final_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_kola",
    img: "jump_kola_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_marigold",
    img: "jump_marigold_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_meora_rc6",
    img: "jump_meora_rc6_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_miner",
    img: "jump_miner_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_overhead2",
    img: "jump_overhead2_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_rabbit_final3",
    img: "jump_rabbit_final3_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_triangle",
    img: "jump_triangle_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_tshirt",
    img: "jump_tshirt_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_virtuoso_tpn",
    img: "jump_virtuoso_tpn_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_zawty_rc1",
    img: "jump_zawty_rc1_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_rickoconnell",
    img: "jump_rickoconnell_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_anime",
    img: "jump_anime_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_aperture_rc15",
    img: "jump_aperture_rc15_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_dicks_c",
    img: "jump_dicks_c_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_empusa_final",
    img: "jump_empusa_final_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_haze",
    img: "jump_haze_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_if_rc2",
    img: "jump_if_rc2_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_kael_final4",
    img: "jump_kael_final4_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_lafing",
    img: "jump_lafing_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_lombardi",
    img: "jump_lombardi_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_minecraftia_a2_t",
    img: "jump_minecraftia_a2_t_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_musparium_rc3",
    img: "jump_musparium_rc3_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_ruelee_a6",
    img: "jump_ruelee_a6_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_snowshot_v3",
    img: "jump_snowshot_v3_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_tombrady_v10",
    img: "jump_tombrady_v10_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_treasure_fix",
    img: "jump_treasure_fix_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_vertuosic_rc6",
    img: "jump_vertuosic_rc6_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_zilent",
    img: "jump_zilent_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_zone_rc2",
    img: "jump_zone_rc2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_rat_rc4",
    img: "jump_rat_rc4_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "sj_naissancee_tf2",
    img: "sj_naissancee_tf2_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "sj_providence_tf",
    img: "sj_providence_tf_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_booyah_jmc",
    img: "jump_booyah_jmc_128.jpeg",
    opts: {
      class: ["demo"],
      tier: ["t2"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_mourn_a3",
    img: "jump_mourn_a3_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_zyma_final5",
    img: "jump_zyma_final5_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_forgotten_rc5",
    img: "jump_forgotten_rc5_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t5"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_dahlia_b1",
    img: "jump_dahlia_b1_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_sauciix_v4",
    img: "jump_sauciix_v4_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_across_a27",
    img: "jump_across_a27_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t3"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_cyskic_final",
    img: "jump_cyskic_final_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t6"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_fayte_final",
    img: "jump_fayte_final_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_nysel_final2",
    img: "jump_nysel_final2_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_testalla_final",
    img: "jump_testalla_final_128.jpeg",
    opts: {
      class: ["soldier"],
      tier: ["t4"],
      hascourses: false,
      hasgimmick: false
    }
  },
  {
    name: "jump_swizzle_rc5",
    img: "jump_swizzle_rc5_128.jpeg",
    opts: {
      class: ["soldier, demo"],
      tier: ["t5, t5"],
      hascourses: false,
      hasgimmick: false
    }
  }
];
