import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { AdamdelsolSwap } from "../target/types/adamdelsol_swap";

describe("adamdelsol_swap", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.AdamdelsolSwap as Program<AdamdelsolSwap>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
