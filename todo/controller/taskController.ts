import express, { Application, Request, Response } from "express";
import taskModel from "../model/task Model";

export const createTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { task, priority } = req.body;

    const tasked = await taskModel.create({
      task,
      priority,
    });
    return res.status(201).json({
      message: "task created",
      data: tasked,
    });
  } catch (error) {
    return res.status(404).json({
      message: "task not created",
    });
  }
};

export const getTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    console.log("Start");
    const getall = await taskModel.find();

    return res.status(201).json({
      message: "task gotten",
      data: getall,
    });
  } catch (error) {
    return res.status(404).json({
      message: "task not gotten",
    });
  }
};

export const getOnetask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;
    const getOne = await taskModel.findById(id);

    return res.status(201).json({
      message: "one task gotten",
      data: getOne,
    });
  } catch (error) {
    return res.status(404).json({
      message: "one task not gotten",
    });
  }
};

export const updateOneTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;
    const update = await taskModel.findByIdAndUpdate(
      id,
      {
        isComplete: true,
      },
      { new: true }
    );

    return res.status(201).json({
      message: "task updated",
      data: update,
    });
  } catch (error) {
    return res.status(404).json({
      message: "task not updated",
    });
  }
};
export const DeleteOneTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;
    const delet = await taskModel.findByIdAndDelete(id);

    return res.status(201).json({
      message: "task deleted",
      data: delet,
    });
  } catch (error) {
    return res.status(404).json({
      message: "task not deleted",
    });
  }
};

// export const bounceBack = await(req:Request,res:Response) =>{
//     try {
//         const back = await authModel.
//     } catch (error) {

//     }
// }
