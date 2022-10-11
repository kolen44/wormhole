export type State = {
  consumed_vaas: {
    elems: {
      handle: string;
    };
  };
  emitter_cap: {
    emitter: string;
    sequence: string;
  };
  governance_chain_id: {
    number: string;
  };
  governance_contract: {
    external_address: string;
  };
  native_infos: {
    handle: string;
  };
  registered_emitters: {
    handle: string;
  };
  signer_cap: {
    account: string;
  };
  wrapped_infos: {
    handle: string;
  };
};