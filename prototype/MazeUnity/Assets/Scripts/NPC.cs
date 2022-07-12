﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine.UI;
using UnityEngine;

[System.Serializable]
public class NPC : MonoBehaviour {
    public bool autoTrigger = false;
    public Transform ChatBackGround;
    public Transform NPCCharacter;

    public DialogueSystem dialogueSystem;

    public string Name;

    [TextArea(40, 10)]
    public string[] sentences;

	void Update () {
          Vector3 Pos = Camera.main.WorldToScreenPoint(NPCCharacter.position);
          Pos.y += 175;
          ChatBackGround.position = Pos;
    }

    public void OnTriggerStay(Collider other)
    {
        Debug.Log("TriggerStay " + this.Name);
        this.gameObject.GetComponent<NPC>().enabled = true;
        dialogueSystem.EnterRangeOfNPC();
        if ((Input.GetKeyDown(KeyCode.F)) || autoTrigger == true)
        {
            this.gameObject.GetComponent<NPC>().enabled = true;
            dialogueSystem.Names = Name;
            dialogueSystem.dialogueLines = sentences;
            dialogueSystem.NPCName(autoTrigger);
            autoTrigger = false;
        }
    }

    public void OnTriggerExit(Collider other)
    {
        dialogueSystem.OutOfRange();
        this.gameObject.GetComponent<NPC>().enabled = false;
    }
}
